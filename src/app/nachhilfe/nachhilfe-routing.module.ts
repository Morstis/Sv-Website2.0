import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NachhilfeGebenComponent } from './_templates/nachhilfe-geben/nachhilfe-geben.component';
import { NachhilfeNehmenComponent } from './_templates/nachhilfe-nehmen/nachhilfe-nehmen.component';
import { NachhilfeWaypointComponent } from './_templates/nachhilfe-waypoint/nachhilfe-waypoint.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'geben', component: NachhilfeGebenComponent },
      { path: 'nehmen', component: NachhilfeNehmenComponent },
      { path: '', component: NachhilfeWaypointComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NachhilfeRoutingModule {}
