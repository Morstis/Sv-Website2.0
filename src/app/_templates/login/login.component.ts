import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/_services/auth.service';
import { LoginData } from 'src/app/_interfaces/login-data';
import { NgForm } from '@angular/forms';
import { ApiResponse } from 'src/app/_interfaces/api-response';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  @ViewChild('loginForm') loginForm: NgForm;

  login(formValue: LoginData) {
    this.auth
      .login(formValue)
      .pipe(take(1))
      .subscribe((res: ApiResponse) => {
        if (res.res) {
          this.auth.setJWT(res.token);
          window.location.href = '/'; // Realod to get JWT ready
        } else {
          /*
        Natürlich geht das nicht mit einem dynamische System nicht. Grund: mat-error triggert nur, wenn
        der control zum mat-error invalid ist nicht, jedoch nicht wenn die Form invalid.
        this.loginForm.form.setErrors({
          [res.error]: true
        });
        */
          this.loginForm.form.controls[
            res.error === 'wrong password' ? 'password' : 'email'
          ].setErrors({
            [res.error]: true
          });
        }
      });
  }
}
