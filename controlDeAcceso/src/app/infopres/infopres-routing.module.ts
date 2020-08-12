import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfopresPage } from './infopres.page';

const routes: Routes = [
  {
    path: '',
    component: InfopresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopresPageRoutingModule {}
