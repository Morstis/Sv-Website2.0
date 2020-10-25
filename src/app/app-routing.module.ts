import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { willkommen } from './modules/willkommen/willkommen.route';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/app-body/app-body.module').then((m) => m.AppBodyModule),
  },
  willkommen,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
