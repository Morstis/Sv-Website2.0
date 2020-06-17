import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SettingsService } from 'src/app/modules/app-body/s/settings.service';
import { AngularFireFunctions } from '@angular/fire/functions/';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../s/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/modules/shared/classes/message.class';

@Component({
  selector: 'lw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  animation$ = this.settingsService.animation();

  constructor(
    private settingsService: SettingsService,
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  @ViewChild('loginForm') loginForm: NgForm;

  login(formValue: { email: string; password: string }) {
    this.auth
      .login(formValue.email, formValue.password)
      .catch((err) => {
        this.loginForm.form.controls[
          err.code === 'auth/wrong-password' ? 'password' : 'email'
        ].setErrors({
          [err.code]: true,
        });
        console.warn(err.code);
        throw new Error('Flasche Nutzereingabe beim Login');
      })
      .then(() => {
        console.log('%clogged in!', 'color: orange');
        new Message(this.snackbar).success('Erfolgreich eingeloggt!');
        this.router.navigateByUrl('/');
      });
  }
}
