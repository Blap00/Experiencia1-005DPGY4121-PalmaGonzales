import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  usuarios: Datos[]
  constructor(private menuController : MenuController, private navController:NavController) { }
  
  ngOnInit() {
    
    if(localStorage.getItem('sesnop')){
      localStorage.removeItem('sesnop')
      localStorage.setItem('ingresaalu','true')
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
