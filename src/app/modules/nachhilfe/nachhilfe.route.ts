import { Route, RouterModule, Routes } from '@angular/router';
import { NachhilfeNComponent } from './c/nachhilfe-n/nachhilfe-n.component';
import { NachhilfeGComponent } from './c/nachhilfe-g/nachhilfe-g.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'nehmen', component: NachhilfeNComponent },
  { path: 'geben', component: NachhilfeGComponent },
  { path: '', pathMatch: 'full', redirectTo: 'nehmen' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NachhilfeRoutingModule {}
