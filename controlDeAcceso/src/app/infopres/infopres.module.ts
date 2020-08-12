import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopresPageRoutingModule } from './infopres-routing.module';

import { InfopresPage } from './infopres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopresPageRoutingModule
  ],
  declarations: [InfopresPage]
})
export class InfopresPageModule {}
