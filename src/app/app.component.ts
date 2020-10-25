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
import { DatenschutzComponent } from './modules/shared/c/datenschutz/datenschutz.component';
import { ImpressumComponent } from './modules/shared/c/impressum/impressum.component';
import { AuthService } from './modules/auth/s/auth.service';

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
    private auth: AuthService
  ) {
    this.user$.subscribe();
  }
  animation$ = this.settingsService.animation();
  mobileDesignSetting$ = this.settingsService.mobileDesign();
  user$ = this.auth.user$;

  ngOnInit(): void {
    /**
    * Relink to /willkommen on enter and not on refresh 
      Alles andere ist einfach nur Spaghetti Code. Viel Spaß. Basically speichert er den momentanen
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
