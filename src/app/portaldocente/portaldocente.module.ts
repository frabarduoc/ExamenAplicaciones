import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortaldocentePageRoutingModule } from './portaldocente-routing.module';

import { PortaldocentePage } from './portaldocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortaldocentePageRoutingModule
  ],
  declarations: [PortaldocentePage]
})
export class PortaldocentePageModule {}
