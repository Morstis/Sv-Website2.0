import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './c/register/register.component';
import { LoginComponent } from './c/login/login.component';
import { AuthRoutingModule } from './auth.route';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
