import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NachhilfeUser } from '../i/nachhilfe-user';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, groupBy, map, toArray, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericSnackbarComponent } from '../../shared/c/generic-snackbar/generic-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class NachhilfeService {
  dbRef = this.db.doc('modules/nachhilfe');

  constructor(
    private db: AngularFirestore,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  geben(data: NachhilfeUser) {
    return this.dbRef
      .collection('geben')
      .add(data)
      .catch((err) =>
        this.handleError(err, 'Unerwareteter Fehler beim Upload!')
      )
      .then(() => {
        this.success('Account erstellt');
      });
  }

  getFaecher(): Observable<string[]> {
    return this.dbRef
      .valueChanges()
      .pipe(map((x: { faecher: string[] }) => x.faecher))
      .pipe(
        catchError((err) =>
          this.handleError(
            err,
            'Es ist ein unerwarteter Fehler beim gekommen der Fächer aufgetreten!'
          )
        )
      );
  }

  // Only for admin usage. Does not display in the UI
  setFeacher() {
    return this.dbRef.set({
      faecher: [
        'biologie',
        'chemie',
        'deutsch',
        'englisch',
        'erdkunde',
        'französisch',
        'geschichte',
        'latein',
        'mathe',
        'politik',
        'physik',
        'spanisch',
      ],
    });
  }
  /*  dynamische Jahrgangerkennung. Das Script holt die Rohdaten von opossum und bearbeitet dann das Observable.
      Referenzen: https://www.learnrxjs.io/
  */
  getClasses(): Observable<string[]> {
    return (
      this.http
        // object that contains strings
        .get<object>(
          'https://api.opossum.media/public/mobileapps/hag/KlassenListe.php'
        )

        .pipe(
          mergeMap((x) =>
            Object.values(x)

              /*  Der Filter wird benötigt um mögliche null returns vom str.match() auszuschließen.
              RegEx Referenz: https://regex101.com/
          */
              .filter(
                (y: string) =>
                  y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi) !== null
              )
              // Es werden die Buchstaben raussortiert
              .map((y: string) => y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi))
          ),
          // Die Zahlen werden gruppiert
          groupBy((x) => x[0]),
          map((group) => group.key),
          toArray(),
          // Zu letzt wird das String Array umgedreht
          map((x) => x.reverse())
        )
        .pipe(
          catchError((err) =>
            this.handleError(
              err,
              'Es ist ein unerwarteter Fehler mit opossum aufgetreten!'
            )
          )
        )
    );
  }

  handleError(error, message) {
    console.log(error, message);

    this.snackBar.openFromComponent(GenericSnackbarComponent, {
      duration: 5000,
      panelClass: ['errorSnackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: { message, icon: 'error' },
    });

    return throwError(error);
  }

  success(message) {
    this.snackBar.openFromComponent(GenericSnackbarComponent, {
      duration: 5000,
      panelClass: ['successSnackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: { message, icon: 'done' },
    });
  }
}
