import { Injectable } from '@angular/core';
import { NachhilfeStoreService } from './nachhilfe-store.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NachhilfeSchueler } from '../_interfaces/nachhilfe-schueler';
import { ADD, LOAD } from 'src/app/_stores/generic-store.service';
import { tap } from 'rxjs/internal/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NachhilfeService {
  constructor(private store: NachhilfeStoreService, private http: HttpClient) {
    this.nachhilfeSchueler$ = this.store.items$;
  }

  nachhilfeSchueler$: Observable<NachhilfeSchueler[]>;

  geben(user: NachhilfeSchueler) {
    return this.http
      .post<{ return: object }>(environment.APIURL + 'nachhilfe', user)
      .pipe(
        tap(returnedUser => {
          this.store.dispach({ type: ADD, data: returnedUser });
        })
      );
  }

  nehmen(): Observable<NachhilfeSchueler[]> {
    return this.http
      .get<NachhilfeSchueler[]>(environment.APIURL + 'nachhilfe')
      .pipe(
        tap(returnedUser => {
          this.store.dispach({ type: LOAD, data: returnedUser });
        })
      );
  }
}
