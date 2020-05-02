import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthModule } from '../../auth.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class LoginModule {}
