import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoadminPageRoutingModule } from './infoadmin-routing.module';

import { InfoadminPage } from './infoadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoadminPageRoutingModule
  ],
  declarations: [InfoadminPage]
})
export class InfoadminPageModule {}
