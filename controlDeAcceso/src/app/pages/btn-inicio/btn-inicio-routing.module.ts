import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtnInicioPage } from './btn-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: BtnInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtnInicioPageRoutingModule {}
