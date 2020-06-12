import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SettingsService } from 'src/app/modules/app-body/s/settings.service';
import { AngularFireFunctions } from '@angular/fire/functions/';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../s/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  animation$ = this.settingsService.animation();
  user$ = this.auth.user;

  constructor(
    private settingsService: SettingsService,
    private auth: AuthService,
    private fireAuth: AngularFireAuth
  ) {
    this.auth.signOut();
    this.user$.subscribe((data) => {
      console.log(data);
    });
  }

  @ViewChild('loginForm') loginForm: NgForm;

  login(formValue) {
    this.auth.login(formValue.email, formValue.password).then(() => {
      console.log(true);
    });
    // this.auth.login(formValue).subscribe((res: ApiResponse) => {
    //   if (res.res) {
    //     this.auth.setJWT(res.token);
    //     this.auth.setCurrentUser(res.return);
    //     this.router.navigateByUrl('/');
    //   } else {
    //     /*
    //     Natürlich geht das nicht mit einem dynamische System nicht. Grund: mat-error triggert nur, wenn
    //     der control zum mat-error invalid ist nicht, jedoch nicht wenn die Form invalid.
    //     this.loginForm.form.setErrors({
    //       [res.error]: true
    //     });
    //     */
    //     this.loginForm.form.controls[
    //       res.error === 'wrong password' ? 'password' : 'email'
    //     ].setErrors({
    //       [res.error]: true,
    //     });
    //   }
    // });
  }
}
