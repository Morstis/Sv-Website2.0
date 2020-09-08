import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from './modules/app-body/s/settings.service';
import {
  Router,
  ActivatedRoute,
  Event,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { take, switchMap } from 'rxjs/operators';
import { WillkommenService } from './modules/willkommen/willkommen.service';
import { MatDialog } from '@angular/material/dialog';
import { DatenschutzComponent } from './modules/auth/c/register/datenschutz/datenschutz.component';
import { ImpressumComponent } from './modules/auth/c/register/impressum/impressum.component';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private willkommen: WillkommenService,
    private dialog: MatDialog
  ) {}
  privacy = false;

  showDatenschutz() {
    this.dialog.open(DatenschutzComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      restoreFocus: false,
      width: '90%',
      maxWidth: '50rem',
    });
  }
  showImpressum() {
    this.dialog.open(ImpressumComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      restoreFocus: false,
      width: '90%',
      maxWidth: '50rem',
    });
  }
  ngOnInit(): void {
    /**
    * Relink to /willkommen on enter and not on refresh 
      Alles andere ist einfach nur Spaghetti Code. Viel Spaß. Basicly speichert er den momentanen
      Route State und redirected dann zu ihm. (Die Logic dafür passiert natürlich in der Greetings
      component, da ich grade keine Lust habe das schön ztu machen)
    */
    this.settingsService
      .willkommen()
      .pipe(take(1))
      .subscribe((res: boolean) => {
        if (res && sessionStorage.getItem('sameSession') !== 'true') {
          this.router.events.pipe(take(1)).subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
              if (
                event.url !== '/willkommen' ||
                event.url !== this.willkommen.currentRoute
              ) {
                this.willkommen.currentRoute = event.url;
                this.router.navigateByUrl('willkommen');
              } else {
                this.willkommen.currentRoute = '/';
              }
            }
          });
          sessionStorage.setItem('sameSession', 'true');
        }
      });
  }
}
