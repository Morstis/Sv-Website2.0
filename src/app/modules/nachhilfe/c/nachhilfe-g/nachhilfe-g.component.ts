import { Component, OnInit } from '@angular/core';
import { NachhilfeUser } from '../../i/nachhilfe-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, groupBy, map, toArray, take } from 'rxjs/operators';
import { NachhilfeService } from '../../s/nachhilfe.service';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/modules/shared/classes/message.class';

@Component({
  selector: 'lw-nachhilfe-g',
  templateUrl: './nachhilfe-g.component.html',
  styleUrls: ['./nachhilfe-g.component.scss'],
})
export class NachhilfeGComponent {
  constructor(
    private nachhilfeService: NachhilfeService,
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) {}

  /*  Ich verwende Template driven form anstatt reactive Forms, um die Buttonwahl der Fächer zu realisieren.
      ansonsten hatte ich die Fächerabfrage außerhalb der form realisieren müssen. Dadurch wäre die Validierung schwieriger geworden.
  */

  faecher$: Observable<string[]> = this.nachhilfeService.getFaecher();
  activeFaecher: string[] = [];
  jg1: string;
  jg2: string;

  classes$: Observable<string[]> = this.nachhilfeService.getClasses();

  user$ = this.auth.user$;
  // ngOnInit() {
  //   this.nachhilfeService.setFeacher().then((res) => {
  //     console.log(res);
  //   });
  // }
  save(formValue) {
    this.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        const nachhilfeSchueler: NachhilfeUser = {
          ...user,
          faecher: this.activeFaecher,
          jahrgang: { jg1: formValue.jg1.class, jg2: formValue.jg2.class },
          info: formValue.info,
        };
        this.nachhilfeService.upload(nachhilfeSchueler);
      } else {
        new Message(this.snackbar).handleError(
          new Error('nicht eingeloggt!'),
          'Bitte logge dich zuerst ein!'
        );
      }
    });
  }

  setFach(fach) {
    if (this.activeFaecher.includes(fach)) {
      this.activeFaecher = this.activeFaecher.filter((item) => {
        return item !== fach;
      });
    } else {
      this.activeFaecher = [...this.activeFaecher, fach];
    }
  }
}
