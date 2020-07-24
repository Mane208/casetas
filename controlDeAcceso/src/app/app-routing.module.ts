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
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
