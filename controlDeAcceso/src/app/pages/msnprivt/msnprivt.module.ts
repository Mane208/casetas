import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsnprivtPageRoutingModule } from './msnprivt-routing.module';

import { MsnprivtPage } from './msnprivt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsnprivtPageRoutingModule
  ],
  declarations: [MsnprivtPage]
})
export class MsnprivtPageModule {}
