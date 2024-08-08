import { Router, Routes } from "@angular/router";
import { CustomManifest } from "./config";
import { getManifest, loadRemoteModule } from "@angular-architects/module-federation";
import { routes } from "../app-routing.module";

export function buildRoutes(options: CustomManifest): Routes {
    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key]; // f.e. options["mfe1"]
        return {
            path: entry.routePath,
            loadChildren: () => loadRemoteModule({
                type: 'manifest',
                remoteName: key,
                exposedModule: entry.exposedModule
            })
            .then(m => m[entry.ngModuleName])
        }
    });

    return [...routes, ...lazyRoutes];
}

export function initializeDynamicAppRouting(router: Router): () => Promise<void> {
    return () =>
        new Promise(resolve => {
            const manifest = getManifest<CustomManifest>();
            const routes = buildRoutes(manifest);
            router.resetConfig(routes);
            resolve();
        })
}