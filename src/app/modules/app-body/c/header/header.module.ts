import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AppBodyModule } from '../../app-body.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [AppBodyModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
