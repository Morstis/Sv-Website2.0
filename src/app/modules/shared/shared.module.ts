import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicRouterOutletComponent } from './c/basic-router-outlet/basic-router-outlet.component';
import { HttpClientModule } from '@angular/common/http';
import { GenericSnackbarComponent } from './c/generic-snackbar/generic-snackbar.component';

@NgModule({
  declarations: [BasicRouterOutletComponent, GenericSnackbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GenericSnackbarComponent,
  ],
})
export class SharedModule {}
