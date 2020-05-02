import { Route } from '@angular/router';
import { AppBodyComponent } from './c/app-body/app-body.component';
import { SettingsComponent } from './c/settings/settings.component';
import { BasicRouterOutletComponent } from '../shared/c/basic-router-outlet/basic-router-outlet.component';

export const appBody: Route = {
  path: '',
  component: AppBodyComponent,
  children: [
    { path: 'settings', component: SettingsComponent },
    { path: 'dashboard', redirectTo: '' },
  ],
};
