import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from './modules/app-body/s/settings.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Relink to willkommen on refresh or enter
    this.settingsService
      .willkommen()
      .pipe(take(1))
      .subscribe((res) => {
        if (res && sessionStorage.getItem('sameSession') !== 'true') {
          this.router.navigateByUrl('willkommen');
          sessionStorage.setItem('sameSession', 'true');
        }
      });
  }
}
