import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BtnInicioPageRoutingModule } from './btn-inicio-routing.module';

import { BtnInicioPage } from './btn-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtnInicioPageRoutingModule
  ],
  declarations: [BtnInicioPage]
})
export class BtnInicioPageModule {}
