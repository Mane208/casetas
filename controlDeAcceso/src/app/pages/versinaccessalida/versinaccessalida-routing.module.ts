import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersinaccessalidaPage } from './versinaccessalida.page';

const routes: Routes = [
  {
    path: '',
    component: VersinaccessalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersinaccessalidaPageRoutingModule {}
