import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { WillkommenModule } from '../../willkommen.module';

@NgModule({
  declarations: [GreetingComponent],
  imports: [WillkommenModule],
})
export class GreetingModule {}
