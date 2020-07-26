import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoCondominosPage } from './contacto-condominos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoCondominosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoCondominosPageRoutingModule {}
