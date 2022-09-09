import { Component } from '@angular/core';
import { AlertController , NavController } from '@ionic/angular';
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
  constructor(private alertController: AlertController,
    private navCtrl: NavController) {}

    handlerMessage = '';
    roleMessage = '';
    async alerta() {
      const alert = await this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Al cerrar la sesión volvera al inicio de registro.',
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Cancelo el salir de la sesión';
            },
          },
          {
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Confirmo el cerrar la sesión, necesitara Abrir la cuenta nuevamente';
              this.navCtrl.navigateRoot('/inicio')
            },
          },
        ] 
      }); 
      await alert.present();
    }
  componentes: Componente[]=[ 
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/inicio-inicio' 
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
    
  ];
  componentes1: Componente[]=[
    {
      icon:'exit-outline',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
  ]
  alumnocomponentes: ComponenteAlumno[]=[
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/alumno' 
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
  ];
  alumnocomponentes1: ComponenteAlumno[]=[
    {
      icon:'exit-outline',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
  ];
}
