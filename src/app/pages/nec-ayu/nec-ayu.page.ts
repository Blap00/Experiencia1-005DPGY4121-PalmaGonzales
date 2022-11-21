import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-nec-ayu',
  templateUrl: './nec-ayu.page.html',
  styleUrls: ['./nec-ayu.page.scss'],
})
export class NecAyuPage implements OnInit {

  constructor(private navController:NavController) { }

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

}
