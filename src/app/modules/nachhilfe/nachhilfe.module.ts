import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NachhilfeGModule } from './c/nachhilfe-g/nachhilfe-g.module';
import { NachhilfeNModule } from './c/nachhilfe-n/nachhilfe-n.module';
import { NachhilfeWModule } from './c/nachhilfe-w/nachhilfe-w.module';

@NgModule({
  declarations: [],
  imports: [NachhilfeGModule, NachhilfeNModule, NachhilfeWModule],
})
export class NachhilfeModule {}
