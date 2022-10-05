import { Component, OnInit } from '@angular/core';
import { ApiAlmJson } from '../../interface/interfaceAlu';
// import { data } from ''
import { alertController } from '@ionic/core';
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
//     this.usuarioservice.getUsers().subscribe(result => {
//       for (var i = 0; i < result[this.usuarioservice.getUsers().subscribe.length].length; i++) {
//         this.faqs.push(result[currentLang][i]['question']);
//       }
// });
    this.usuarioservice.getUsers().subscribe(resp =>{
      console.log('usuarios', resp);
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
    
  for (let index = 0; index < this.usuarioservice.getUsers().subscribe.length; index++) {
      this.usuarioservice.getUsers().subscribe(resp =>{
        console.log("si")
      })
  }
  
    // this.usuarioservice.getUsers()
    // .subscribe(resp =>{
    //   for (let index = 0; index < this.usuarioservice.getUsers()._subscribe.length; index++) {
    //     console.log(this.usuarioservice.getUsers().subscribe.name)
    //     // if((resp.usuario=this.usuario.user) && (resp.contrasenna=this.usuario.pass) && (resp.semestre)){
    //     //   console.log("Alumno ingresado")
    //     //   this.alerta2();        }
    //     // else if((resp.usuario!=this.usuario.user) && (resp.contrasenna=this.usuario.pass) && (resp.semestre) || (resp.contrasenna!=this.usuario.pass) && (resp.usuario=this.usuario.user) && (resp.semestre)){
    //     //   console.log("Alumno con problemas de datos usuario")
    //     //   this.alerta1();
    //     // }
    //     // else if((resp.usuario=this.usuario.user) && (resp.contrasenna=this.usuario.pass) ){
    //     //   console.log("Usuario ingresado de rol equivocado")
    //     //   this.router.navigate(['/alumno'])

    //     // }
    //     // else{
    //     //   console.log("Desconocido");
    //     //   this.alerta1();
    //     // }        
    //   }
    // })
    // console.log(this.usuarios.length);
    // for (let index = 0; index < this.usuarios.length; index++) {
    //   // const element = this.usuarios[index];
      
    // }
  }
  onSubmit(){
    // this.usuarioservice.getUsers().subscribe(resp =>{
    //   if(this.)
    // })
  }
}
