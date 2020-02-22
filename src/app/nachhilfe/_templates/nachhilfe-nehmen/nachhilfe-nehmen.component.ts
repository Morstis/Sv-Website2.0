import { Component, OnInit } from '@angular/core';
import { NachhilfeService } from '../../_services/nachhilfe.service';
import { Observable } from 'rxjs';
import { NachhilfeSchueler } from '../../_interfaces/nachhilfe-schueler';
import { tap, map, debounceTime } from 'rxjs/operators';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../_components/user-dialog/user-dialog.component';

@Component({
  selector: 'mors-nachhilfe-nehmen',
  templateUrl: './nachhilfe-nehmen.component.html',
  styleUrls: ['./nachhilfe-nehmen.component.scss']
})
export class NachhilfeNehmenComponent implements OnInit {
  constructor(private nachhilfe: NachhilfeService, private dialog: MatDialog) {
    this.nachhilfeSchueler$ = this.nachhilfe.nachhilfeSchueler$;
  }
  nachhilfeSchueler$: Observable<NachhilfeSchueler[]>;
  filteredSchueler$: Observable<NachhilfeSchueler[]>;

  ngOnInit() {
    this.nachhilfe.nehmen().subscribe();
  }

  filter(eventValue) {
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
  open(id) {
    this.nachhilfeSchueler$.subscribe(res => {
      const user = res.filter(x => x.id === id);
      console.log(user);
      this.dialog.open(UserDialogComponent, {
        data: user[0]
      });
    });
  }
  toArray(obj) {
    return Object.values(obj);
  }
}
