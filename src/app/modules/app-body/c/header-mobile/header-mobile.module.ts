import { NgModule } from '@angular/core';
import { HeaderMobileComponent } from './header-mobile.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [HeaderMobileComponent],
  imports: [SharedModule],
  exports: [HeaderMobileComponent],
})
export class HeaderMobileModule {}
