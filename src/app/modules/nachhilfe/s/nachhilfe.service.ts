import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NachhilfeUser } from '../i/nachhilfe-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, groupBy, map, toArray, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenericService } from '../../shared/classes/generic-service';
import { Endpoint } from '../../shared/i/endpoint';

@Injectable({
  providedIn: 'root',
})
export class NachhilfeService extends GenericService<NachhilfeUser> {
  constructor(
    private http: HttpClient,
    protected db: AngularFirestore,
    protected snackBar: MatSnackBar
  ) {
    super(db, snackBar, { dbRef: 'modules/nachhilfe', collRef: 'user' });
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
}
