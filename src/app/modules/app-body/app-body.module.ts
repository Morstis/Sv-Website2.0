import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from './c/header/header.module';
import { AppBodyModuleComponent } from './c/app-body/app-body.module';

@NgModule({
  declarations: [],
  exports: [SharedModule],
})
export class AppBodyModule {}
