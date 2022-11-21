import { Component, OnInit } from '@angular/core';
import { FeriadoService } from 'src/app/services/feriado.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-feriados-pro',
  templateUrl: './feriados-pro.page.html',
  styleUrls: ['./feriados-pro.page.scss'],
})
export class FeriadosProPage implements OnInit {

  feriado: any;

  constructor(private feriadosService: FeriadoService, private menuController:MenuController, private navController:NavController) { }

  ngOnInit() {
    if(localStorage.getItem('sesnop')){
      localStorage.setItem('sesnop','true')
      localStorage.removeItem('ingresaalu')
      localStorage.removeItem('ingresapro')
      this.navController.navigateRoot(['/inicio']);

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
    this.feriadosService.getFeriados().subscribe(resp => {
      console.log('feriados', resp);
      this.feriado = resp;
      console.log(this.feriado);
      //this.feriado.push('feriados', resp); //no tira error aqui pero si al compilar
    });
  }
  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
  }

}
