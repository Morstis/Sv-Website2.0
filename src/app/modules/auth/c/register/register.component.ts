import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../s/auth.service';
import { AdditionUserInfo } from 'src/app/modules/shared/i/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/modules/shared/classes/message.class';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

@Component({
  selector: 'lw-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog
  ) {}

  @ViewChild('registerForm') registerForm: NgForm;

  ngOnInit(): void {}

  register(value: any) {
    const additionUserInfo = new AdditionUserInfo();
    // Setzt nur die Attribute von additionUserInfo die auch in AdditionUserInfo vorhanden sind
    for (const key in additionUserInfo) {
      if (additionUserInfo.hasOwnProperty(key)) {
        additionUserInfo[key] = value[key];
      }
    }
    this.auth
      .register(value.email, value.pw1, additionUserInfo)
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          this.registerForm.form.controls.email.setErrors({
            [err.code]: true,
          });
          throw err as Error;
        } else {
          new Message(this.snackbar).handleError(
            err,
            'Fehler beim Registrieren!'
          );
        }
      })
      .then(() => {
        new Message(this.snackbar).success('Erfolgreich registriert!');
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 3000);
      });
  }

  showDatenschutz() {
    this.dialog.open(DatenschutzComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      restoreFocus: false,
      width: '90%',
      maxWidth: '50rem',
    });
  }
}
