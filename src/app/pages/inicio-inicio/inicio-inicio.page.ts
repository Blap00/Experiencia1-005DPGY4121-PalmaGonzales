import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-inicio',
  templateUrl: './inicio-inicio.page.html',
  styleUrls: ['./inicio-inicio.page.scss'],
})
export class InicioInicioPage implements OnInit {


  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
    
  }




}