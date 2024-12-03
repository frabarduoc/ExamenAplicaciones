import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PortalalumnoPageRoutingModule } from './portalalumno-routing.module';
import { PortalalumnoPage } from './portalalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalalumnoPageRoutingModule
  ],
  declarations: [PortalalumnoPage]
})
export class PortalalumnoPageModule {}
