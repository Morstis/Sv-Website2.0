import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_templates/login/login.component';
import { RegisterComponent } from './_templates/register/register.component';
import { VerifyComponent } from './_templates/verify/verify.component';

const routes: Routes = [
  {
    path: 'nachhilfe',
    loadChildren: () =>
      import('./nachhilfe/nachhilfe.module').then(
        module => module.NachhilfeModule
      )
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
