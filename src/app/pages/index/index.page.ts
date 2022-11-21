import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// interface Correo{
//   email: string;
// }  

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  
  handlerMessage = '';
  roleMessage = '';
  async alerta() {
    const alert = await this.alerController.create({
      header: 'ERROR',
      message: 'Recuerde que debe utilizar correo Institucional, es decir, @duocuc.cl o @profesor.duoc.cl',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Confirmo el no redirigirse, necesitara ingresar la cuenta correcta ';
          },
        },
      ] 
    }); 
    await alert.present();
  }
  correo1='duocuc.cl';
  correo2='profesor.duoc.cl'
  pusuario={
    email:'',
  }
  email=this.pusuario.email;
  correosplitted= this.pusuario.email.split("@",2)[1];  
  constructor(private alerController: AlertController,
              private routerLinks: Router, private navController:NavController) { }
  splitted= this.email.split("@", 3)
  ngOnInit() {
    if(localStorage.getItem('sesnop')){
      localStorage.setItem('sesnop','true')
      localStorage.removeItem('ingresaalu')
      localStorage.removeItem('ingresapro')
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
      this.navController.navigateRoot(['/alumno'])
    }
  }
  onSubmit1(){
    this.correosplitted= this.pusuario.email.split("@",2)[1];  
    console.log((this.correosplitted));
    console.log("submit");
    this.correo1=this.correo1;
    if (this.correosplitted == this.correo1){
      console.log("Funciono IF del DUOCUC.CL");
      this.routerLinks.navigate(['/registralu'])
    }
    else if(this.correosplitted == this.correo2){
      console.log("funciono IF del profesor");
      this.routerLinks.navigate(['/registrpro'])
    }
    else{
      console.log("TRAMPOSO NO EXISTE ESE ERROR");
      this.alerta();
    }
  }
  // onSubmit2(){
  //   this.correosplitted= this.pusuario.email.split("@",2)[1];  
  //   console.log((this.correosplitted));
  //   console.log("submit");
  //   this.correo1=this.correo1;
  //   if (this.correosplitted == this.correo1){
  //     console.log("Funciono IF del DUOCUC.CL");
  //   }
  //   else if(this.correosplitted == this.correo2){
  //     console.log("funciono IF del profesor");
  //   }
  //   else{
  //     console.log("TRAMPOSO NO EXISTE ESE ERROR");
  //   }
  // }
}
