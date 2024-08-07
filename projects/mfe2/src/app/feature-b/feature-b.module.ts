import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBComponent } from './feature-b.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeatureBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureBComponent
      }
    ])
  ],
  exports: [
    FeatureBComponent
  ]
})
export class FeatureBModule { }
