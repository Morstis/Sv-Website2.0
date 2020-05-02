import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule],
})
export class SettingsModule {}
