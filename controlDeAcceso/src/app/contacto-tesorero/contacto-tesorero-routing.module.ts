import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoTesoreroPage } from './contacto-tesorero.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoTesoreroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoTesoreroPageRoutingModule {}
