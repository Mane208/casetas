import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosinputPageRoutingModule } from './datosinput-routing.module';

import { DatosinputPage } from './datosinput.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosinputPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatosinputPage]
})
export class DatosinputPageModule {}
