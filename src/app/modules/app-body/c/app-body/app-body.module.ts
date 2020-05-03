import { NgModule } from '@angular/core';
import { AppBodyComponent } from './app-body.component';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HeaderMobileModule } from '../header-mobile/header-mobile.module';

@NgModule({
  declarations: [AppBodyComponent],
  imports: [SharedModule, HeaderModule, HeaderMobileModule],
})
export class AppBodyModuleComponent {}
