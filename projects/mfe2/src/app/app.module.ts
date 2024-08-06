import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureBModule } from './feature-b/feature-b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
