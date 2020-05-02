import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../s/settings.service';

@Component({
  selector: 'lw-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss'],
})
export class AppBodyComponent {
  animation$ = this.settingsService.animation();
  constructor(private settingsService: SettingsService) {}
}
