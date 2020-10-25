import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { GreetingComponent } from './greeting.component';

@NgModule({
  declarations: [GreetingComponent],
  imports: [SharedModule],
})
export class GreetingModule {}
