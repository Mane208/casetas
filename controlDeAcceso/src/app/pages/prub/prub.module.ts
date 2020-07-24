import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrubPageRoutingModule } from './prub-routing.module';

import { PrubPage } from './prub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrubPageRoutingModule
  ],
  declarations: [PrubPage]
})
export class PrubPageModule {}
