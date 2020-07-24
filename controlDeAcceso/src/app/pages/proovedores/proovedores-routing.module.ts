import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProovedoresPage } from './proovedores.page';

const routes: Routes = [
  {
    path: '',
    component: ProovedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProovedoresPageRoutingModule {}
