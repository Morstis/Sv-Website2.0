import { Injectable } from '@angular/core';
import { Store } from 'src/app/_stores/generic-store.service';
import { NachhilfeSchueler } from '../_interfaces/nachhilfe-schueler';

@Injectable({
  providedIn: 'root'
})
export class NachhilfeStoreService extends Store<NachhilfeSchueler> {}
