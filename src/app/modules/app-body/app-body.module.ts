import { NgModule } from '@angular/core';
import { HeaderModule } from './c/header/header.module';
import { AppBodyModuleComponent } from './c/app-body/app-body.module';
import { SettingsModule } from './c/settings/settings.module';

@NgModule({
  declarations: [],
  imports: [HeaderModule, AppBodyModuleComponent, SettingsModule],
})
export class AppBodyModule {}
