import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPrincipalPageRoutingModule } from './buscar-principal-routing.module';

import { BuscarPrincipalPage } from './buscar-principal.page';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPrincipalPageRoutingModule
  ],
  declarations: [BuscarPrincipalPage]
})
export class BuscarPrincipalPageModule {}
