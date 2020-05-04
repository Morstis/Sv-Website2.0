import { Route } from '@angular/router';
import { BasicRouterOutletComponent } from '../shared/c/basic-router-outlet/basic-router-outlet.component';
import { NachhilfeNComponent } from './c/nachhilfe-n/nachhilfe-n.component';
import { NachhilfeGComponent } from './c/nachhilfe-g/nachhilfe-g.component';
import { NachhilfeWComponent } from './c/nachhilfe-w/nachhilfe-w.component';

export const nachhilfeRoute: Route = {
  path: 'nachhilfe',
  component: BasicRouterOutletComponent,
  children: [
    { path: 'nehmen', component: NachhilfeNComponent },
    { path: 'geben', component: NachhilfeGComponent },
    { path: '', pathMatch: 'full', component: NachhilfeWComponent },
  ],
};
