import { NgModule } from '@angular/core';
import { NachhilfeNComponent } from './nachhilfe-n.component';
import { NachhilfeDiagComponent } from './nachhilfe-diag/nachhilfe-diag.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [NachhilfeNComponent, NachhilfeDiagComponent],
  imports: [SharedModule],
  entryComponents: [NachhilfeDiagComponent],
})
export class NachhilfeNModule {}
