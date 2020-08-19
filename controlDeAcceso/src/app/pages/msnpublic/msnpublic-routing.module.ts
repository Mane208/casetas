import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsnpublicPage } from './msnpublic.page';

const routes: Routes = [
  {
    path: '',
    component: MsnpublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsnpublicPageRoutingModule {}
