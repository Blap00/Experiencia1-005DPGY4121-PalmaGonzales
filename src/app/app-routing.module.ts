import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SesaluGuard } from './guards/sesalu.guard';
import { SesnopGuard } from './guards/sesnop.guard';
import { SesproGuard } from './guards/sespro.guard';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'nec-ayu',
    loadChildren: () => import('./pages/nec-ayu/nec-ayu.module').then( m => m.NecAyuPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'err',
    loadChildren: () => import('./pages/err/err.module').then( m => m.ERRPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'inisesalu',
    loadChildren: () => import('./pages/inisesalu/inisesalu.module').then( m => m.InisesaluPageModule),
    canActivate:[SesnopGuard],
    
  },
  {
    path: 'inisespro',
    loadChildren: () => import('./pages/inisespro/inisespro.module').then( m => m.InisesproPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'registralu',
    loadChildren: () => import('./pages/registralu/registralu.module').then( m => m.RegistraluPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'registrpro',
    loadChildren: () => import('./pages/registrpro/registrpro.module').then( m => m.RegistrproPageModule),
    canActivate:[SesnopGuard]
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate:[SesaluGuard]
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./pages/codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule),
    canActivate:[SesproGuard]
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./pages/escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule),
    canActivate:[SesaluGuard]
  },
  {
    path: 'hde-clases',
    loadChildren: () => import('./pages/hde-clases/hde-clases.module').then( m => m.HdeClasesPageModule),
    canActivate:[SesproGuard]
  },
  {
    path: 'inicio-inicio',
    loadChildren: () => import('./pages/inicio-inicio/inicio-inicio.module').then( m => m.InicioInicioPageModule),
    canActivate:[SesproGuard]
  },
  {
    path: 'misclases',
    loadChildren: () => import('./pages/misclases/misclases.module').then( m => m.MisclasesPageModule),
    canActivate:[SesaluGuard]
  },
  {
    path: 'reg-asistencia',
    loadChildren: () => import('./pages/reg-asistencia/reg-asistencia.module').then( m => m.RegAsistenciaPageModule),
    canActivate:[SesproGuard]
  },
];
//Si ocurre conflicto, utilizar siguientes comandos en la consola
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
