import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarvisitasPage } from './buscarvisitas.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarvisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarvisitasPageRoutingModule {}
