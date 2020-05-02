import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { WillkommenModule } from '../../willkommen.module';

@NgModule({
  declarations: [GreetingComponent],
  imports: [SharedModule],
})
export class GreetingModule {}
