import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-misclases',
  templateUrl: './misclases.page.html',
  styleUrls: ['./misclases.page.scss'],
})
export class MisclasesPage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController,
    private routerLink: Router, private navController:NavController) { }
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
    if(localStorage.getItem('sesnop')){
      localStorage.setItem('sesnop','true')
      localStorage.removeItem('ingresaalu')
      localStorage.removeItem('ingresapro')
      this.navController.navigateRoot(['/inicio']);
    }
    else if(localStorage.getItem('ingresapro')){
      localStorage.removeItem('sesnop')
      localStorage.removeItem('ingresaalu')
      localStorage.setItem('ingresapro','true')
      this.navController.navigateRoot(['/inicio-inicio'])
    }
    else{
      localStorage.removeItem('sesnop')
      localStorage.removeItem('ingresapro')
      localStorage.setItem('ingresaalu','true')
    }
  }
  mostrarMenu(){

  }
  mostrarMenuA(){
    this.menuController.open('second');
    this.menuController.enable(false,'first');
    this.menuController.enable(true,'second');
    
  }

}
