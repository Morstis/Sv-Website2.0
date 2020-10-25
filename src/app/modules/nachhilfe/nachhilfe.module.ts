import { NgModule } from '@angular/core';
import { NachhilfeGModule } from './c/nachhilfe-g/nachhilfe-g.module';
import { NachhilfeNModule } from './c/nachhilfe-n/nachhilfe-n.module';
import { NachhilfeWModule } from './c/nachhilfe-w/nachhilfe-w.module';
import { NachhilfeRoutingModule } from './nachhilfe.route';

@NgModule({
  declarations: [],
  imports: [
    NachhilfeGModule,
    NachhilfeNModule,
    NachhilfeWModule,
    NachhilfeRoutingModule,
  ],
})
export class NachhilfeModule {}
