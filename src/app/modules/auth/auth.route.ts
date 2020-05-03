import { Route } from '@angular/router';
import { LoginComponent } from './c/login/login.component';
import { RegisterComponent } from './c/register/register.component';

export const auth: Route = {
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
  ],
};
