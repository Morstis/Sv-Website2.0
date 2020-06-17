import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../s/settings.service';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';

@Component({
  selector: 'lw-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss'],
})
export class AppBodyComponent {
  animation$ = this.settingsService.animation();
  mobileDesignSetting$ = this.settingsService.mobileDesign();
  user$ = this.auth.user$;

  constructor(
    private settingsService: SettingsService,
    private auth: AuthService
  ) {
    this.user$.subscribe();
  }
}
