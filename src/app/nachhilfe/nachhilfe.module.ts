import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NachhilfeRoutingModule } from './nachhilfe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NachhilfeWaypointComponent } from './_templates/nachhilfe-waypoint/nachhilfe-waypoint.component';
import { NachhilfeGebenComponent } from './_templates/nachhilfe-geben/nachhilfe-geben.component';
import { NachhilfeNehmenComponent } from './_templates/nachhilfe-nehmen/nachhilfe-nehmen.component';

@NgModule({
  declarations: [NachhilfeWaypointComponent, NachhilfeGebenComponent, NachhilfeNehmenComponent],
  imports: [CommonModule, NachhilfeRoutingModule, SharedModule]
})
export class NachhilfeModule {}