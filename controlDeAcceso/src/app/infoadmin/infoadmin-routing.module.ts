import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoadminPage } from './infoadmin.page';

const routes: Routes = [
  {
    path: '',
    component: InfoadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoadminPageRoutingModule {}
