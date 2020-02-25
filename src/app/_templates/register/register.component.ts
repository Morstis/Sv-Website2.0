import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mors-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}

  @ViewChild('registerForm') registerForm: NgForm;

  register(formValue) {
    this.auth
      .register(formValue)
      .pipe(take(1))
      .subscribe(res => {
        if (res.res) {
          // Registrieung erfolgreich
          console.log('%cUser gespeichert!', 'color: green');
          window.location.href = 'https://hag-iserv.de/iserv/mail';
        } else {
          // Fehler Ausgabe im Formular
          this.registerForm.form.controls[
            res.error === 'password missmatch' ? 'pw1' : 'email'
          ].setErrors({ [res.error]: true });
        }
      });
  }
}
