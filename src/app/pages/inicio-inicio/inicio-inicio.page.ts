import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';


@Component({
  selector: 'app-inicio-inicio',
  templateUrl: './inicio-inicio.page.html',
  styleUrls: ['./inicio-inicio.page.scss'],
})
export class InicioInicioPage implements OnInit {
  usuarios : Datos[]=[]

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
    else if(localStorage.getItem('ingresapro')){
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