import { Component, OnInit } from '@angular/core';
import { NachhilfeUser } from '../../i/nachhilfe-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, groupBy, map, toArray } from 'rxjs/operators';
import { NachhilfeService } from '../../s/nachhilfe.service';

@Component({
  selector: 'lw-nachhilfe-g',
  templateUrl: './nachhilfe-g.component.html',
  styleUrls: ['./nachhilfe-g.component.scss'],
})
export class NachhilfeGComponent {
  constructor(private nachhilfeService: NachhilfeService) {}

  /*  Ich verwende Template driven form anstatt reactive Forms, um die Buttonwahl der Fächer zu realisieren.
      ansonsten hatte ich die Fächerabfrage außerhalb der form realisieren müssen. Dadurch wäre die Validierung schwieriger geworden.
  */

  faecher$: Observable<string[]> = this.nachhilfeService.getFaecher();
  activeFaecher: string[] = [];
  jg1: string;
  jg2: string;

  classes$: Observable<string[]> = this.nachhilfeService.getClasses();
  // ngOnInit() {
  //   this.nachhilfeService.setFeacher().then((res) => {
  //     console.log(res);
  //   });
  // }
  save(formValue) {
    const nachhilfeSchueler: NachhilfeUser = {
      // ...this.auth.currentUserValue(),
      email: 'lucas.wiese@gmx.de',
      klasse: '11d',
      nachname: 'Wiese',
      role: 'ADMIN',
      vorname: 'Lucas',
      faecher: this.activeFaecher,
      jahrgang: { jg1: formValue.jg1.class, jg2: formValue.jg2.class },
      info: formValue.info,
    };
    this.nachhilfeService.upload(nachhilfeSchueler);

    console.log(formValue);
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
