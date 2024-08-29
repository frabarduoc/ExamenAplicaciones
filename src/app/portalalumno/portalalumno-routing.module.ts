import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalalumnoPage } from './portalalumno.page';

const routes: Routes = [
  {
    path: '',
    component: PortalalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalalumnoPageRoutingModule {}
