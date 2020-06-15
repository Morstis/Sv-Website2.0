import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NachhilfeUser } from '../../../i/nachhilfe-user';

@Component({
  selector: 'lw-nachhilfe-diag',
  templateUrl: './nachhilfe-diag.component.html',
  styleUrls: ['./nachhilfe-diag.component.scss'],
})
export class NachhilfeDiagComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: NachhilfeUser) {}

  jahrgang(jahrgang: { jg1: string; jg2: string }) {
    return jahrgang.jg1 + ' - ' + jahrgang.jg2;
  }
}
