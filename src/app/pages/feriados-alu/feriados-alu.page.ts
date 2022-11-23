import { Component, OnInit } from '@angular/core';
import { FeriadoService } from 'src/app/services/feriado.service';
import { Data } from 'src/app/interfaces/int-feriados';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-feriados-alu',
  templateUrl: './feriados-alu.page.html',
  styleUrls: ['./feriados-alu.page.scss'],
})
export class FeriadosAluPage implements OnInit {
  feriado: Data[] = [];
  constructor(private feriadosService: FeriadoService, private menuController:MenuController, private navController:NavController) { }

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
    this.feriadosService.getFeriados().subscribe(resp =>{
      console.log('feriado: ', resp);
      this.feriado.push(...resp.data)
    })

    // this.feriadosService.getFeriados().subscribe(resp => {
    //   console.log(resp)
    //   this.feriado = resp;
    //   //this.feriado.push('feriados', resp); //no tira error aqui pero si al compilar
    // });
  }
  mostrarMenu(){
    this.menuController.open('second');
    this.menuController.enable(false,'first');
    this.menuController.enable(true,'second');
  }
}
