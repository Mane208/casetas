import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoPresidentePage } from './contacto-presidente.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoPresidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoPresidentePageRoutingModule {}
