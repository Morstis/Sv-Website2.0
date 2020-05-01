import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { willkommen } from './modules/willkommen/willkommen.route';
import { GreetingComponent } from './modules/willkommen/c/greeting/greeting.component';

const routes: Routes = [willkommen];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
