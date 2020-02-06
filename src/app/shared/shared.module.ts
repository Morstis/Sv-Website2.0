import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { CompareWithDirective } from '../_directives/validation/compare-with.directive';

@NgModule({
  declarations: [CompareWithDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule
  ],
  exports: [
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CompareWithDirective,
    FormsModule
  ]
})
export class SharedModule {}
