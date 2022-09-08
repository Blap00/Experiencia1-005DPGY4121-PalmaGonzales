import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-hde-clases',
  templateUrl: './hde-clases.page.html',
  styleUrls: ['./hde-clases.page.scss'],
})
export class HdeClasesPage implements OnInit {
  eventSource =[];
  viewTitle: string;

  calendar={
    mode: 'month',
    currentDate: new Date()
    };


  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
  }
}