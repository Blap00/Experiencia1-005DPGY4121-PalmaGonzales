import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;

}
interface ComponenteAlumno{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[ 
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/inicio' 
    },
   
    {
      icon: 'clipboard-outline',
      name:  'Registro de Asistencia',
      redirecTo: '/reg-asistencia' 
    },
    {
      icon:'calendar-outline',
      name: 'Horario de Clases', 
      redirecTo: '/hde-clases'
    },
    {
      icon:'exit-outline',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
    {
      icon:'eye-outline',
      name: 'borrar despues/alumno', 
      redirecTo: '/alumno'
    },
    
  ];
  alumnocomponentes: ComponenteAlumno[]=[
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/inicio' 
    },
    {
      icon: 'book-outline',
      name:  'Mis Clases',
      redirecTo: '/misclases' 
    },
    {
      icon: 'home-outline',
      name:  'Escanear QR',
      redirecTo: '/escanearqr' 
    },
    {
      icon: 'home-outline',
      name:  'Cerrar Sesión',
      redirecTo: '/inicio' 
    },
  ];



}
