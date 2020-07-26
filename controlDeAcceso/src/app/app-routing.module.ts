import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
  path: 'inicio',
  loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
},
  
  {
    path: 'alertas',
    loadChildren: () => import('./pages/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'accesos',
    loadChildren: () => import('./pages/accesos/accesos.module').then( m => m.AccesosPageModule)
  },
  {
    path: 'btn-inicio',
    loadChildren: () => import('./pages/btn-inicio/btn-inicio.module').then( m => m.BtnInicioPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'datosinput',
    loadChildren: () => import('./pages/datosinput/datosinput.module').then( m => m.DatosinputPageModule)
  },
  {
    path: 'noacceso',
    loadChildren: () => import('./pages/noacceso/noacceso.module').then( m => m.NoaccesoPageModule)
  },
  {
    path: 'proovedores',
    loadChildren: () => import('./pages/proovedores/proovedores.module').then( m => m.ProovedoresPageModule)
  },
  {
    path: 'prub',
    loadChildren: () => import('./pages/prub/prub.module').then( m => m.PrubPageModule)
  },   {
    path: 'buscarvisitas',
    loadChildren: () => import('./pages/buscarvisitas/buscarvisitas.module').then( m => m.BuscarvisitasPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  
   
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },  {
    path: 'salidas',
    loadChildren: () => import('./salidas/salidas.module').then( m => m.SalidasPageModule)
  },
  {
    path: 'proveedores-salida',
    loadChildren: () => import('./proveedores-salida/proveedores-salida.module').then( m => m.ProveedoresSalidaPageModule)
  },
  {
    path: 'contacto-administrador',
    loadChildren: () => import('./contacto-administrador/contacto-administrador.module').then( m => m.ContactoAdministradorPageModule)
  },
  {
    path: 'contacto-presidente',
    loadChildren: () => import('./contacto-presidente/contacto-presidente.module').then( m => m.ContactoPresidentePageModule)
  },
  {
    path: 'contacto-tesorero',
    loadChildren: () => import('./contacto-tesorero/contacto-tesorero.module').then( m => m.ContactoTesoreroPageModule)
  },
  {
    path: 'contacto-condominos',
    loadChildren: () => import('./contacto-condominos/contacto-condominos.module').then( m => m.ContactoCondominosPageModule)
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
