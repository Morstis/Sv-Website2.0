import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_templates/login/login.component';

const routes: Routes = [
  {
    path: 'nachhilfe',
    loadChildren: () =>
      import('./nachhilfe/nachhilfe.module').then(
        module => module.NachhilfeModule
      )
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
