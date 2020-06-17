import { Route } from '@angular/router';
import { BasicRouterOutletComponent } from '../shared/c/basic-router-outlet/basic-router-outlet.component';
import { NachhilfeNComponent } from './c/nachhilfe-n/nachhilfe-n.component';
import { NachhilfeGComponent } from './c/nachhilfe-g/nachhilfe-g.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

export const nachhilfeRoute: Route = {
  path: 'nachhilfe',
  component: BasicRouterOutletComponent,
  ...canActivate(() => redirectUnauthorizedTo(['login'])),
  children: [
    { path: 'nehmen', component: NachhilfeNComponent },
    { path: 'geben', component: NachhilfeGComponent },
    { path: '', pathMatch: 'full', redirectTo: 'nehmen' },
  ],
};
