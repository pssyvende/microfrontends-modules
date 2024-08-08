import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomManifest } from './utils/config';
import { buildRoutes } from './utils/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*/ {
  title = 'shell';

  /*constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    const manifest = getManifest<CustomManifest>();

    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
  }*/
}
