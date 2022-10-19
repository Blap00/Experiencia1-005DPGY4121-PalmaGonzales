import { Component, OnInit } from '@angular/core';
import { ApiAlmJson } from '../../interface/interfaceAlu';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  usuarios: ApiAlmJson[]= [];
  usuariover: [];
  constructor(private usuarioservice: UsuariosService, private router: Router, private alertcontroller:AlertController ) { }
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
    this.usuarioservice.getUsers().subscribe(resp =>{
      console.log('usuarios', resp);
      this.usuarios= resp
    })
  }
  async alerta1() {
    const alert = await this.alertcontroller.create({
      header: 'Datos de inicio de sesión erroneos',
      message: 'Nombre de usuario o contraseña estan erroneos',
      buttons: ['OK'], 
    });
    await alert.present();
  }
  async alerta2() {
    const alert = await this.alertcontroller.create({
      header: 'Datos de inicio de sesión erroneos',
      message: 'El usuario tiene otro Rol dentro de la aplicación',
      buttons: ['OK'], 
    });
    await alert.present();
  }
  async alerta3() {
    const alert = await this.alertcontroller.create({
      header: 'Error desconocido',
      message: 'El usuario No puede ingresar por motivos desconocidos',
      buttons: ['OK'], 
    });
    await alert.present();
  }

  buscarUser(){
  
    this.usuarioservice.getUsers()
    .subscribe(resp =>{
      for (let index = 0; index<=this.usuarios.length; index++) {
        if((this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass) && (this.usuarios[index].semestre)){
          console.log("Alumno ingresado");
          this.router.navigate(['/alumno']);
          break;
        }      
        else if((this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass) && (this.usuarios[index].semestre=="")){
          console.log("El usuario no pertenece al rol de alumno");
          this.alerta2();
          break;
        }
        if((this.usuarios[index].usuario)!=(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass) || (this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)!=(this.usuario.pass)) {
          if(this.usuarios[index].semestre==""){
            console.log("datos erroneos y no existe en alumno tabla")
            this.alerta1();
            this.alerta2();
            break;
          }
          else{
            console.log("datos erroneos")
            this.alerta1();
            break;
          }
        }
      }
    })
  }
  onSubmit(){
  }
}
