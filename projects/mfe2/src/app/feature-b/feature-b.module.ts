import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBComponent } from './feature-b.component';



@NgModule({
  declarations: [
    FeatureBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureBComponent
  ]
})
export class FeatureBModule { }
