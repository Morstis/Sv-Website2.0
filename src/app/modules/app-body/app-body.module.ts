import { NgModule } from '@angular/core';
import { HeaderComponent } from './c/header/header.component';
import { HeaderMobileComponent } from './c/header-mobile/header-mobile.component';
import { SettingsComponent } from './c/settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { AppBodyComponent } from './c/app-body/app-body.component';
import { AppBodyRoutingModule } from './app-body-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMobileComponent,
    SettingsComponent,
    AppBodyComponent,
  ],
  imports: [CommonModule, SharedModule, AppBodyRoutingModule],
})
export class AppBodyModule {}
