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

@Component({
  selector: 'mors-nachhilfe-geben',
  templateUrl: './nachhilfe-geben.component.html',
  styleUrls: ['./nachhilfe-geben.component.scss']
})
export class NachhilfeGebenComponent implements OnInit {
  nachhilfeGForm: FormGroup;
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
          .map((y: string) => y.match(/Q[0-9]|E[0-9]|[0-9][0-9]|[0-9]/gi))
      ),
      groupBy(x => x[0]),
      map(group => group.key),
      toArray()
    );

  constructor(private http: HttpClient) {}

  save(formValue) {
    console.log(formValue, this.activeFaecher);
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
  ngOnInit() {}
}
