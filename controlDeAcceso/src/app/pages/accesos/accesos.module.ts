import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesosPageRoutingModule } from './accesos-routing.module';

import { AccesosPage } from './accesos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccesosPage]
})
export class AccesosPageModule {}
