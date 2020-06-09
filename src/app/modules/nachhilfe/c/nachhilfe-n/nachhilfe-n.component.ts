import { Component, OnInit } from '@angular/core';
import { NachhilfeDiagComponent } from './nachhilfe-diag/nachhilfe-diag.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, take } from 'rxjs/operators';
import { NachhilfeUser } from '../../i/nachhilfe-user';
import { NachhilfeService } from '../../s/nachhilfe.service';

@Component({
  selector: 'lw-nachhilfe-n',
  templateUrl: './nachhilfe-n.component.html',
  styleUrls: ['./nachhilfe-n.component.scss'],
})
export class NachhilfeNComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private nachhilfeService: NachhilfeService
  ) {}
  nachhilfeSchueler$: Observable<NachhilfeUser[]>;
  filteredSchueler$: Observable<NachhilfeUser[]>;
  subscription: Subscription;

  ngOnInit() {
    this.nachhilfeSchueler$ = this.nachhilfeService.getAll();
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
  show(key) {
    console.log(key);

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
  toArray(obj) {
    return Object.values(obj);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
