import { NgModule } from '@angular/core';
import { HeaderModule } from './c/header/header.module';
import { AppBodyModuleComponent } from './c/app-body/app-body.module';
import { SettingsModule } from './c/settings/settings.module';
import { HeaderMobileModule } from './c/header-mobile/header-mobile.module';

@NgModule({
  declarations: [],
  imports: [
    HeaderModule,
    AppBodyModuleComponent,
    SettingsModule,
    HeaderMobileModule,
  ],
})
export class AppBodyModule {}
