import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAComponent } from './feature-a.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeatureAComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureAComponent
      }
    ])
  ],
  exports: [
    FeatureAComponent
  ]
})
export class FeatureAModule { }
