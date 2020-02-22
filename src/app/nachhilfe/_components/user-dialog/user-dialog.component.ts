import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/_classes/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NachhilfeSchueler } from '../../_interfaces/nachhilfe-schueler';

@Component({
  selector: 'mors-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: NachhilfeSchueler) {}
}
