import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProovedoresPageRoutingModule } from './proovedores-routing.module';

import { ProovedoresPage } from './proovedores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProovedoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProovedoresPage]
})
export class ProovedoresPageModule {}
