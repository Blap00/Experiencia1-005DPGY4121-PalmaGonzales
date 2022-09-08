import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-misclases',
  templateUrl: './misclases.page.html',
  styleUrls: ['./misclases.page.scss'],
})
export class MisclasesPage implements OnInit {

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){

  }
  mostrarMenuA(){
    this.menuController.open('second');
    this.menuController.enable(false,'first');
    this.menuController.enable(true,'second');
    
  }

}
