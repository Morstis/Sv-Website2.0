import { Component, OnInit } from '@angular/core';
import { NachhilfeDiagComponent } from './nachhilfe-diag/nachhilfe-diag.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { NachhilfeUser } from '../../i/nachhilfe-user';

@Component({
  selector: 'lw-nachhilfe-n',
  templateUrl: './nachhilfe-n.component.html',
  styleUrls: ['./nachhilfe-n.component.scss'],
})
export class NachhilfeNComponent implements OnInit {
  constructor(private dialog: MatDialog) {
    // this.nachhilfeSchueler$ = this.nachhilfe.nachhilfeSchueler$;
  }
  nachhilfeSchueler$: Observable<NachhilfeUser[]>;
  filteredSchueler$: Observable<NachhilfeUser[]>;
  subscription: Subscription;

  ngOnInit() {
    // this.subscription = this.nachhilfe.nehmen().subscribe();
  }

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
  show(id) {
    this.nachhilfeSchueler$.pipe(take(1)).subscribe((res) => {
      const user = res.filter((x) => x.id === id);
      this.dialog.open(NachhilfeDiagComponent, {
        data: user[0],
        autoFocus: false,
        closeOnNavigation: true,
        restoreFocus: false,
      });
    });
  }
  toArray(obj) {
    return Object.values(obj);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
