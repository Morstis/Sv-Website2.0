import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
