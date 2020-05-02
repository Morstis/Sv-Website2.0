import { Component } from '@angular/core';
import { SettingsService } from '../../s/settings.service';

@Component({
  selector: 'lw-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  settings$ = this.settingsService.settings;

  constructor(private settingsService: SettingsService) {}

  change() {
    this.settings$.next(this.settings$.value);
  }
}
