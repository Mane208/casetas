import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosinputPage } from './datosinput.page';

const routes: Routes = [
  {
    path: '',
    component: DatosinputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosinputPageRoutingModule {}
