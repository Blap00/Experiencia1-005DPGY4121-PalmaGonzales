import { Component, OnInit } from '@angular/core';
import { FeriadoService } from 'src/app/services/feriado.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-feriados-alu',
  templateUrl: './feriados-alu.page.html',
  styleUrls: ['./feriados-alu.page.scss'],
})
export class FeriadosAluPage implements OnInit {

  feriado: any;

  constructor(private feriadosService: FeriadoService, private menuController:MenuController) { }

  ngOnInit() {
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
