import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'nachhilfe',
    loadChildren: () =>
      import('./nachhilfe/nachhilfe.module').then(
        module => module.NachhilfeModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
