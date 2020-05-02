import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { willkommen } from './modules/willkommen/willkommen.route';
import { appBody } from './modules/app-body/app-body.route';
import { auth } from './modules/auth/auth.route';

const routes: Routes = [willkommen, appBody, auth];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
