import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinAccesoSalidasPage } from './sin-acceso-salidas.page';

const routes: Routes = [
  {
    path: '',
    component: SinAccesoSalidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinAccesoSalidasPageRoutingModule {}
