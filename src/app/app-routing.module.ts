import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'aceptar',
    loadChildren: () => import('./aceptar/aceptar.module').then( m => m.AceptarPageModule)
  },
  {
    path: 'ganador',
    loadChildren: () => import('./ganador/ganador.module').then( m => m.GanadorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rechazar',
    loadChildren: () => import('./rechazar/rechazar.module').then( m => m.RechazarPageModule)
  },
  {
    path: 'seleccion-invitado',
    loadChildren: () => import('./seleccion-invitado/seleccion-invitado.module').then( m => m.SeleccionInvitadoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }