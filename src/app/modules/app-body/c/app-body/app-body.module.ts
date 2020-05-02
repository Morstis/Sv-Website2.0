import { NgModule } from '@angular/core';
import { AppBodyComponent } from './app-body.component';
import { AppBodyModule } from '../../app-body.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AppBodyComponent],
  imports: [AppBodyModule, HeaderModule],
})
export class AppBodyModuleComponent {}
