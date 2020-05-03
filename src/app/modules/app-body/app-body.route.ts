import { Route } from '@angular/router';
import { AppBodyComponent } from './c/app-body/app-body.component';
import { SettingsComponent } from './c/settings/settings.component';

export const appBody: Route = {
  path: '',
  component: AppBodyComponent,
  children: [{ path: 'settings', component: SettingsComponent }],
};
