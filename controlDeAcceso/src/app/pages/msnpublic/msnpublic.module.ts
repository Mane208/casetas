import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsnpublicPageRoutingModule } from './msnpublic-routing.module';

import { MsnpublicPage } from './msnpublic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsnpublicPageRoutingModule
  ],
  declarations: [MsnpublicPage]
})
export class MsnpublicPageModule {}
