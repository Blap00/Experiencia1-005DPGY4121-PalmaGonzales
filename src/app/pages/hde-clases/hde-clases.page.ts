import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hde-clases',
  templateUrl: './hde-clases.page.html',
  styleUrls: ['./hde-clases.page.scss'],
})
export class HdeClasesPage implements OnInit {
  eventSource =[];
  viewTitle: string;

  calendar={
    mode: 'month',
    currentDate: new Date()
    };


  constructor(private menuController: MenuController,
              private alertController: AlertController,
              private routerLink: Router,
              private navController:NavController) { }
  handlerMessage = '';
  roleMessage = '';
  ngOnInit() {
    if(localStorage.getItem('sesnop')){
      localStorage.setItem('ingresapro','true')
      localStorage.removeItem('sesnop')
      localStorage.removeItem('ingresaalu')
    }
    else if(localStorage.getItem('ingresaalu')){
      localStorage.removeItem('sesnop')
      this.navController.navigateRoot(['/alumno']);
    }
    else{
      localStorage.removeItem('sesnop')
      localStorage.removeItem('ingresaalu')
      localStorage.setItem('ingresapro','true')
    }
  }
  async alerta() {
    const alert = await this.alertController.create({
      header: '¿Estas Seguro?',
      message: 'Recuerda que crearas el QR y solo puedes crear uno durante este periodo',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Confirmo el QR, Abrir nuevo QR(prox)';
            this.routerLink.navigate(['/codigoqr'])
          },
        },
      ] 
    }); 
    await alert.present();
  }
  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
  }
}