import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocontactoPage } from './infocontacto.page';

const routes: Routes = [
  {
    path: '',
    component: InfocontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocontactoPageRoutingModule {}
