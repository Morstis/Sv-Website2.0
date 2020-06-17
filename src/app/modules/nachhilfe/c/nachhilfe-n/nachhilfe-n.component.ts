import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NachhilfeDiagComponent } from './nachhilfe-diag/nachhilfe-diag.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  map,
  take,
  switchMap,
  skipUntil,
  last,
} from 'rxjs/operators';
import { NachhilfeUser } from '../../i/nachhilfe-user';
import { NachhilfeService } from '../../s/nachhilfe.service';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';
import { AuthService } from 'src/app/modules/auth/s/auth.service';

@Component({
  selector: 'lw-nachhilfe-n',
  templateUrl: './nachhilfe-n.component.html',
  styleUrls: ['./nachhilfe-n.component.scss'],
})
export class NachhilfeNComponent {
  constructor(
    private dialog: MatDialog,
    private auth: AuthService,
    private nachhilfeService: NachhilfeService
  ) {}
  nachhilfeSchueler$: Observable<
    NachhilfeUser[]
  > = this.nachhilfeService.getAll().pipe(
    map((users) => {
      return users.sort((a, b) => {
        return b.creationDate.seconds - a.creationDate.seconds;
      });
    })
  );
  filteredSchueler$: Observable<NachhilfeUser[]>;
  subscription: Subscription;

  filter(eventValue) {
    this.filteredSchueler$ = this.nachhilfeSchueler$.pipe(
      debounceTime(200),
      map((x) => {
        return x.filter((user) => {
          const contains: boolean[] = user.faecher.map((fach) => {
            return fach.indexOf(eventValue.toLowerCase()) === 0 ? true : false;
          });
          return contains.includes(true);
        });
      })
    );
  }
  show(key) {
    this.nachhilfeSchueler$.pipe(take(1)).subscribe((res) => {
      const user = res.filter((x) => x.key === key);
      this.dialog.open(NachhilfeDiagComponent, {
        data: user[0],
        autoFocus: false,
        closeOnNavigation: true,
        restoreFocus: false,
        width: '90%',
        maxWidth: '50rem',
      });
    });
  }
  jahrgang(jahrgang: { jg1: string; jg2: string }) {
    return jahrgang.jg1 + ' - ' + jahrgang.jg2;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
