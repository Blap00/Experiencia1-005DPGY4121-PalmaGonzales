import { Component, OnInit } from '@angular/core';
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

interface Carrera{
  name: string;
  value: number;
}
interface Semestre{
  sem: string;
  value: number;
}

@Component({
  selector: 'app-inisesalu',
  templateUrl: './inisesalu.page.html',
  styleUrls: ['./inisesalu.page.scss'],
})
export class InisesaluPage implements OnInit {
  formularioLogin: FormGroup;
  usuarios: Datos[]= [];

  constructor(private navController:NavController,private usuarioservice: UsuarioAluService, private router: Router, private alertcontroller:AlertController, 
    private fb: FormBuilder) { 
      this.formularioLogin = this.fb.group({ 
        'user' : new FormControl("", Validators.required),
        'pass' : new FormControl ("", Validators.required)                
      })
    }
    usuario={
      user:'',
      pass:'',
    }

  carrera: Carrera[]=[
    {
      name: 'Ingenieria Informatica',
      value: 1,
    },
    {
      name: 'Analista Programador',
      value: 2,
    },
    {
      name: 'Ingenieria Mecanica',
      value: 3,
    },
    {
      name: 'Auditor contador',
      value: 4,
    },
    
  ];
  semestre: Semestre[]=[
    {
      sem: 'Primer semestre',
      value: 1,
    },
    {
      sem: 'Segundo Semestre',
      value: 2,
    },
    {
      sem: 'Tercer semestre',
      value: 3,
    },
    {
      sem: 'Cuarto Semestre',
      value: 4,
    },
    
  ];
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
  buscarUser(){
    var f = this.formularioLogin.value;
    var a=0;
    this.usuarioservice.getDatos().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.user == obj.usuario && f.pass==obj.contrasenna){
          a=1;
          console.log('ingresado');     
          this.router.navigate(['/alumno']);
          if(f.user != obj.usuario && f.pass==obj.contrasenna){
            a=0
            console.log("Mal ingresado el usuario")
          }
          if(f.user == obj.usuario && f.pass!=obj.contrasenna){
            a=2
            console.log("Mal ingresado la contrasenna")
          }
          if(f.user != obj.usuario && f.pass!=obj.contrasenna){
            a=3
            console.log("Mal ingresado todo")
          }
          // if(obj.semestre==null){
          //   a=4
          //   console.log("El usuario ingreso mal su rol")
          // }
        }
      }//findelfor
      if(a==0){
        this.alertMsg2();
      }
      else if(a==3){
        this.alertMsg1();
      }
      else if(a==2){
        this.alertMsg3();
      }
      else if(a==4){
        this.alertMsg4();
      }
    })
  }//findelmetodo
    async alertMsg1(){
      const alert = await this.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    async alertMsg2(){
      const alert = await this.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados en el campo de usuario son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    async alertMsg3(){
      const alert = await this.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados en el campo de contrasenna son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    handlerMessage=""
    async alertMsg4(){
  
      const alert = await this.alertcontroller.create({
        header: '¡Error!',
        message: 'Los datos ingresados por el rol son incorrectos',
        buttons: [
          {
            text: 'Cambiar a Docente',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'acepto cambiar el rol';
              this.router.navigate(['/inisespro'])
            },
          },
          {
            text: 'Cambiar datos',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Confirmo el cambiar datos';
  
            },
          },
        ]
      })
      await alert.present();
      return;
    }
  onSubmit(){
  }
}
