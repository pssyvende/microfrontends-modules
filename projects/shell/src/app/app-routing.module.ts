import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
      type: 'manifest', // 'script' | 'module' | 'manifest' | undefined
      remoteName: 'mfe1',
      exposedModule: './Module'
    })
    .then(m => m.FeatureAModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe2',
      exposedModule: './Module'
    })
    .then(m => m.FeatureBModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
