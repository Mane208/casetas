import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesMedicosPage } from './mensajes-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesMedicosPageRoutingModule {}
