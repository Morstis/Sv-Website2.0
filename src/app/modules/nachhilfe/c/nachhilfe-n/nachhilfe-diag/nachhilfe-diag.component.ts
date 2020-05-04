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

  toArray(obj: object) {
    return Object.values(obj);
  }
}
