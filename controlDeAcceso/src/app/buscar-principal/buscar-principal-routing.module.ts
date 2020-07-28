import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPrincipalPage } from './buscar-principal.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPrincipalPageRoutingModule {}
