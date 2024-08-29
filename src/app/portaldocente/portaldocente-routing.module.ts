import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortaldocentePage } from './portaldocente.page';

const routes: Routes = [
  {
    path: '',
    component: PortaldocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortaldocentePageRoutingModule {}
