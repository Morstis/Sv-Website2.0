import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from './c/app-body/app-body.component';
import { SettingsComponent } from './c/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent,
    children: [
      { path: 'settings', component: SettingsComponent },

      {
        path: 'nachhilfe',
        ...canActivate(() => redirectUnauthorizedTo(['auth/login'])),
        loadChildren: () =>
          import('../../modules/nachhilfe/nachhilfe.module').then(
            (m) => m.NachhilfeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBodyRoutingModule {}
