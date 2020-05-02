import { NgModule } from '@angular/core';
import { RegisterModule } from './c/register/register.module';
import { LoginModule } from './c/login/login.module';

@NgModule({
  declarations: [],
  imports: [RegisterModule, LoginModule],
})
export class AuthModule {}
