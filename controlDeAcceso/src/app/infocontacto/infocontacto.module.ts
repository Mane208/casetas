import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocontactoPageRoutingModule } from './infocontacto-routing.module';

import { InfocontactoPage } from './infocontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocontactoPageRoutingModule
  ],
  declarations: [InfocontactoPage]
})
export class InfocontactoPageModule {}
