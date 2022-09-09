import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController , NavController } from '@ionic/angular';
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
              private navCtrl: NavController) { }
  handlerMessage = '';
  roleMessage = '';
  ngOnInit() {
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
            this.navCtrl.navigateRoot('/codigoqr')
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