import { Injectable, OnInit, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Settings } from '../i/settings';
import { DOCUMENT } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings = new BehaviorSubject<Settings>(
    JSON.parse(localStorage.getItem('settings')) || {
      darkTheme: true,
      animation: true,
    }
  );

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.settings.subscribe((res: Settings) => {
      localStorage.setItem('settings', JSON.stringify(res));
      if (res.darkTheme) {
        this.document.body.classList.remove('theme-alternate');
      } else {
        this.document.body.classList.add('theme-alternate');
      }
    });
  }
  animation(): Observable<boolean> {
    return this.settings.pipe(map((x) => x.animation));
  }
}
