import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicRouterOutletComponent } from './c/basic-router-outlet/basic-router-outlet.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GenericSnackbarComponent } from './c/generic-snackbar/generic-snackbar.component';
import { KlasseValidationDirective } from './d/klasse-validation.directive';
import { EmailValidationDirective } from './d/email-validation.directive';
import { CompareWithDirective } from './d/compare-with.directive';
import { LoaderComponent } from './c/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    BasicRouterOutletComponent,
    GenericSnackbarComponent,
    KlasseValidationDirective,
    EmailValidationDirective,
    CompareWithDirective,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CompareWithDirective,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GenericSnackbarComponent,
    KlasseValidationDirective,
    EmailValidationDirective,
    LoaderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class SharedModule {}
