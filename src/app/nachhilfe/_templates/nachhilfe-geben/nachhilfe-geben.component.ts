import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { of, merge, zip, Observable } from 'rxjs';
import {
  groupBy,
  map,
  flatMap,
  tap,
  mergeMap,
  skip,
  toArray
} from 'rxjs/internal/operators/';
import { NachhilfeSchueler } from 'src/app/_interfaces/nachhilfe-schueler';

@Component({
  selector: 'mors-nachhilfe-geben',
  templateUrl: './nachhilfe-geben.component.html',
  styleUrls: ['./nachhilfe-geben.component.scss']
})
export class NachhilfeGebenComponent {
  /*  Ich verwende Template driven form anstatt reactive Forms, um die Buttonwahl der Fächer zu realisieren.
      ansonsten hatte ich die Fächerabfrage außerhalb der form realisieren müssen. Dadurch wäre die Validierung schwieriger geworden.
  */
  // leider nicht dynamisch
  // TODO: dynamisch machen
  faecher: string[] = [
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
    'spanisch'
  ];
  activeFaecher: string[] = [];

  /*  dynamische Jahrgangerkennung. Das Script holt die Rohdaten von opossum und bearbeitet dann das Observable.
      Referenzen: https://www.learnrxjs.io/
  */
  classes$: Observable<string[]> = this.http
    // object that contains strings
    .get<object>(
      'https://api.opossum.media/public/mobileapps/hag/KlassenListe.php'
    )
    .pipe(
      mergeMap(x =>
        Object.values(x)

          /*  Der Filter wird benötigt um mögliche null returns vom str.match() auszuschließen.
              RegEx Referenz: https://regex101.com/
          */
          .filter(
            (y: string) => y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi) !== null
          )
          // Es werden die Buchstaben raussortiert
          .map((y: string) => y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi))
      ),
      // Die Zahlen werden gruppiert
      groupBy(x => x[0]),
      map(group => group.key),
      toArray(),
      // Zu letzt wird das String Array umgedreht
      map(x => x.reverse())
    );

  constructor(private http: HttpClient) {}

  save(formValue) {
    const nachhilfeSchueler: NachhilfeSchueler = {
      faecher: this.activeFaecher,
      jahrgang: { jg1: formValue.jg1.class, jg2: formValue.jg2.class },
      info: formValue.info
    };
    console.log(nachhilfeSchueler);
  }

  setFach(fach) {
    if (this.activeFaecher.includes(fach)) {
      this.activeFaecher = this.activeFaecher.filter(item => {
        return item !== fach;
      });
    } else {
      this.activeFaecher = [...this.activeFaecher, fach];
    }
  }
}
