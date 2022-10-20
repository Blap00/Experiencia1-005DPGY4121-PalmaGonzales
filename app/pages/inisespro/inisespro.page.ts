import { Component, OnInit } from '@angular/core';
import { ApiAlmJson } from '../../interface/interfaceAlu';
import { UsuariosService } from 'src/app/services/usuarios.service';
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
  selector: 'app-inisespro',
  templateUrl: './inisespro.page.html',
  styleUrls: ['./inisespro.page.scss'],
})
export class InisesproPage implements OnInit {
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
    console.log("fuera ")
    this.usuarioservice.getUsers()
    .subscribe(resp =>{
      for (let index = 0; index<=this.usuarios.length; index++) {
        // console.log("dentro", resp)
        // console.log(this.usuarios[index].semestre.length)
        if((this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass) && (this.usuarios[index].semestre.length<=1)){
          console.log("Docente ingresado");
          this.router.navigate(['/inicio-inicio']);
          break;
        }      
        else if((this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass)){
          if((this.usuarios[index].semestre.length>=2)){
          console.log("El usuario no pertenece al rol de docente");
          this.alerta2();
          break;
          }
          else{
            console.log("Error desconocido")
            this.alerta3();
            break
          }
        }
        if((this.usuarios[index].usuario)!=(this.usuario.user) && (this.usuarios[index].contrasenna)==(this.usuario.pass) || (this.usuarios[index].usuario)==(this.usuario.user) && (this.usuarios[index].contrasenna)!=(this.usuario.pass)) {
          console.log(this.usuarios[index].semestre.length)
          if(this.usuarios[index].semestre==""){
            console.log("datos erroneos")
            this.alerta1();
            break;
          }
          else{            
          console.log("datos erroneos y no existe en docente tabla")
          this.alerta1();
          this.alerta2();
          break;
          }
        }
        
      }
    })
  }
  onSubmit(){
  }
}