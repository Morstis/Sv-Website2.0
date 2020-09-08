import { Component, OnInit, OnDestroy } from '@angular/core';
import { NachhilfeUser } from '../../i/nachhilfe-user';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subscription, Subject } from 'rxjs';
import {
  mergeMap,
  groupBy,
  map,
  toArray,
  take,
  catchError,
  skip,
} from 'rxjs/operators';
import { NachhilfeService } from '../../s/nachhilfe.service';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from 'src/app/modules/shared/classes/message.class';
import { User } from 'src/app/modules/shared/i/user';

@Component({
  selector: 'lw-nachhilfe-g',
  templateUrl: './nachhilfe-g.component.html',
  styleUrls: ['./nachhilfe-g.component.scss'],
})
export class NachhilfeGComponent implements OnInit, OnDestroy {
  constructor(
    private nachhilfeService: NachhilfeService,
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) {}

  /*  Ich verwende Template driven form anstatt reactive Forms, um die Buttonwahl der Fächer zu realisieren.
      ansonsten hatte ich die Fächerabfrage außerhalb der form realisieren müssen. Dadurch wäre die Validierung schwieriger geworden.
      Und weil ich dumm bin.
      */

  faecher$: Observable<string[]> = this.nachhilfeService.getFaecher();
  activeFaecher: string[] = [];
  jg1: string;
  jg2: string;

  classes$: Observable<string[]> = this.nachhilfeService.getClasses();

  user$ = this.auth.user$;
  user: User;
  sub: Subscription = new Subscription();
  new: boolean;
  infoWow: string = null;

  ngOnInit() {
    this.sub.add(
      this.user$.subscribe(
        (user) => {
          this.user = user;
          if (this.user instanceof Object) {
            this.nachhilfeService.keyExists(this.user.key).subscribe((x) => {
              this.new = !x;

              if (x) {
                this.nachhilfeService
                  .getOneByKey(this.user.key)
                  .pipe(take(1))
                  .subscribe((data) => {
                    this.activeFaecher = data.faecher;
                    this.infoWow = data.info || '';
                  });
              }
            });
          }
        },
        (err) => {
          new Message(this.snackbar).handleError(
            err,
            'Ein unerwarteter Fehler ist aufgetreten!'
          );
        }
      )
    );
  }

  del() {
    this.nachhilfeService.deleteKey(this.user.key).then((x) => {
      new Message(this.snackbar).success('Erfolgreich gelöscht');
    });
  }

  save(formValue) {
    if (this.user) {
      const nachhilfeSchueler: NachhilfeUser = {
        ...this.user,
        faecher: this.activeFaecher,
        jahrgang: { jg1: formValue.jg1.class, jg2: formValue.jg2.class },
        info: formValue.info,
      };

      if (this.new) {
        this.nachhilfeService.createOneForKey(this.user.key, nachhilfeSchueler);
      } else {
        this.nachhilfeService.updateForKey(this.user.key, nachhilfeSchueler);
      }
    } else {
      new Message(this.snackbar).handleError(
        new Error('nicht eingeloggt!'),
        'Bitte logge dich zuerst ein!'
      );
    }
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
