import { Component, OnInit, OnDestroy } from '@angular/core';
import { NachhilfeService } from '../../_services/nachhilfe.service';
import { Observable, Subscription } from 'rxjs';
import { NachhilfeSchueler } from '../../_interfaces/nachhilfe-schueler';
import { tap, map, debounceTime, take } from 'rxjs/operators';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../_components/user-dialog/user-dialog.component';

@Component({
  selector: 'mors-nachhilfe-nehmen',
  templateUrl: './nachhilfe-nehmen.component.html',
  styleUrls: ['./nachhilfe-nehmen.component.scss']
})
export class NachhilfeNehmenComponent implements OnInit, OnDestroy {
  constructor(private nachhilfe: NachhilfeService, private dialog: MatDialog) {
    this.nachhilfeSchueler$ = this.nachhilfe.nachhilfeSchueler$;
  }
  nachhilfeSchueler$: Observable<NachhilfeSchueler[]>;
  filteredSchueler$: Observable<NachhilfeSchueler[]>;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.nachhilfe.nehmen().subscribe();
  }

  filter(eventValue) {
    console.log('stupid2');

    this.filteredSchueler$ = this.nachhilfeSchueler$.pipe(
      debounceTime(200),
      map(x => {
        return x.filter(user => {
          const contains: boolean[] = user.faecher.map(fach => {
            return fach.indexOf(eventValue.toLowerCase()) === 0 ? true : false;
          });
          return contains.includes(true);
        });
      })
    );
  }
  iamnuicha(id) {
    this.nachhilfeSchueler$.pipe(take(1)).subscribe(res => {
      const user = res.filter(x => x.id === id);
      this.dialog.open(UserDialogComponent, {
        data: user[0],
        autoFocus: false,
        closeOnNavigation: true,
        restoreFocus: false
      });
    });
  }
  toArray(obj) {
    return Object.values(obj);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
