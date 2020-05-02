import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from './modules/app-body/s/settings.service';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private settingsService: SettingsService) {}
}
