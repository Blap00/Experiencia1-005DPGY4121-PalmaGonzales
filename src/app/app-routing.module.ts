import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IngresadoaluGuard} from './ingresadoalu.guard';
import {NoIngresadoaluGuard} from './no-ingresadoalu.guard';
import {NoIngresadoproGuard} from './no-ingresadopro.guard';
import {IngresadoproGuard} from './ingresadopro.guard';
 
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule),
    canActivate:[NoIngresadoaluGuard]
    
  },
  {
    path: 'nec-ayu',
    loadChildren: () => import('./pages/nec-ayu/nec-ayu.module').then( m => m.NecAyuPageModule),
    canActivate:[NoIngresadoaluGuard]


  },
  {
    path: 'err',
    loadChildren: () => import('./pages/err/err.module').then( m => m.ERRPageModule),
    canActivate:[NoIngresadoaluGuard]


  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[NoIngresadoaluGuard]

    
  },
  {
    path: 'inisesalu',
    loadChildren: () => import('./pages/inisesalu/inisesalu.module').then( m => m.InisesaluPageModule),
    canActivate:[NoIngresadoaluGuard]

    
  },
  {
    path: 'inisespro',
    loadChildren: () => import('./pages/inisespro/inisespro.module').then( m => m.InisesproPageModule),
    canActivate:[NoIngresadoproGuard]

    
  },
  {
    path: 'registralu',
    loadChildren: () => import('./pages/registralu/registralu.module').then( m => m.RegistraluPageModule),
    canActivate:[NoIngresadoaluGuard]

    
  },
  {
    path: 'registrpro',
    loadChildren: () => import('./pages/registrpro/registrpro.module').then( m => m.RegistrproPageModule),
    canActivate:[NoIngresadoproGuard]
    
    
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate:[IngresadoaluGuard]
    
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./pages/codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule),
    canActivate:[IngresadoproGuard]
    
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),
    canActivate:[IngresadoaluGuard]
    
  },
  {
    path: 'hde-clases',
    loadChildren: () => import('./pages/hde-clases/hde-clases.module').then( m => m.HdeClasesPageModule),
    canActivate:[IngresadoproGuard]
    
  },
  {
    path: 'inicio-inicio',
    loadChildren: () => import('./pages/inicio-inicio/inicio-inicio.module').then( m => m.InicioInicioPageModule),
    canActivate:[IngresadoproGuard]
    
  },
  {
    path: 'misclases',
    loadChildren: () => import('./pages/misclases/misclases.module').then( m => m.MisclasesPageModule),
    canActivate:[IngresadoaluGuard]
    
  },
  {
    path: 'reg-asistencia',
    loadChildren: () => import('./pages/reg-asistencia/reg-asistencia.module').then( m => m.RegAsistenciaPageModule),
    canActivate:[IngresadoproGuard]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
