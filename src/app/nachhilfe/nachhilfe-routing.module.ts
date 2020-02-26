import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NachhilfeGebenComponent } from './_templates/nachhilfe-geben/nachhilfe-geben.component';
import { NachhilfeNehmenComponent } from './_templates/nachhilfe-nehmen/nachhilfe-nehmen.component';
import { NachhilfeWaypointComponent } from './_templates/nachhilfe-waypoint/nachhilfe-waypoint.component';
import { LoginGuardService } from '../_services/guards/login-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardService],
    children: [
      {
        path: 'geben',
        component: NachhilfeGebenComponent,
        canActivate: [LoginGuardService]
      },
      {
        path: 'nehmen',
        component: NachhilfeNehmenComponent,
        canActivate: [LoginGuardService]
      },
      { path: '', component: NachhilfeWaypointComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NachhilfeRoutingModule {}
