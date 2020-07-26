import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresSalidaPage } from './proveedores-salida.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresSalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedoresSalidaPageRoutingModule {}
