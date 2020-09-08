import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [RegisterComponent, DatenschutzComponent, ImpressumComponent],
  imports: [SharedModule],
})
export class RegisterModule {}
