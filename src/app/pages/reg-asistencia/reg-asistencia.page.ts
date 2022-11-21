import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reg-asistencia',
  templateUrl: './reg-asistencia.page.html',
  styleUrls: ['./reg-asistencia.page.scss'],
})
export class RegAsistenciaPage implements OnInit {

  constructor(private menuController: MenuController, private navController:NavController) { }

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

  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
  }

}