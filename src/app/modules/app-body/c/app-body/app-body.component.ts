import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../s/settings.service';
import { AuthService } from 'src/app/modules/auth/s/auth.service';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/modules/shared/s/loader.service';
import { MatDialog } from '@angular/material/dialog';
import { DatenschutzComponent } from 'src/app/modules/shared/c/datenschutz/datenschutz.component';
import { ImpressumComponent } from 'src/app/modules/shared/c/impressum/impressum.component';

@Component({
  selector: 'lw-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss'],
})
export class AppBodyComponent {
  privacy = false;

  animation$ = this.settingsService.animation();
  mobileDesignSetting$ = this.settingsService.mobileDesign();
  user$ = this.auth.user$;

  constructor(
    private settingsService: SettingsService,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
    this.user$.subscribe();
  }

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
}
