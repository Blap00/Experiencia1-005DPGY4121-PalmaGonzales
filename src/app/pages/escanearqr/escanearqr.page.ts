import { Component, OnInit   } from '@angular/core';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { MenuController } from '@ionic/angular'; 
import { AlertController, NavController } from '@ionic/angular';
// import { CameraPreview  } from '@awesome-cordova-plugins/camera-preview/ngx';
// import { CameraService } from '../../services/camera.service'; //terminar despues

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  constructor(private menuController : MenuController,
    private alertController: AlertController, private navController:NavController
    ) { }

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
  // tomarFoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }
  
  async alerta() {
    const alert = await this.alertController.create({
      header: '¿Estas Seguro?',
      message: 'Recuerda que solo puedes escanear una vez durante el periodo entre tus clases',
      buttons: ['OK'], 
    });
    await alert.present();
  }

  mostrarMenu(){

  }
  mostrarMenuA(){
    this.menuController.open('second');
    this.menuController.enable(false,'first');
    this.menuController.enable(true,'second');
    
  }

}
