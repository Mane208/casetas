import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarVisitaPage } from './buscar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarVisitaPageRoutingModule {}
