import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-misclases',
  templateUrl: './misclases.page.html',
  styleUrls: ['./misclases.page.scss'],
})
export class MisclasesPage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController,
    private routerLink: Router) { }
handlerMessage = '';
roleMessage = '';

async alerta() {
const alert = await this.alertController.create({
header: '¿Estas Seguro?',
message: 'Te redirigiremos al leector de codigo QR',
buttons: [
{
text: 'Ok',
role: 'confirm',
handler: () => {
  this.handlerMessage = 'Confirmo quiero abrir leector de QR';
  this.routerLink.navigate(['/escanearqr'])
},
},
] 
}); 
await alert.present();
}
  ngOnInit() {
  }
  mostrarMenu(){

  }
  mostrarMenuA(){
    this.menuController.open('second');
    this.menuController.enable(false,'first');
    this.menuController.enable(true,'second');
    
  }

}
