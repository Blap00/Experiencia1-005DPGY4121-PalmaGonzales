import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
// import { JsonUsers } from '../../models/json-users';
// import { ApiAlmJsonService } from '../../services/api-alm-json.service';
// import { ApiAlmJson } from 'src/app/interface/interfaceAlu';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {AlertController} from '@ionic/angular';


interface Carrera{
  name: string;
  value: number;
}
interface Semestre{
  sem: string;
  value: number;
}
interface datousu{
  id: number;
  usuario: String,
  contrasenna: String,
  recontrasenna: String,    
  carrera: String,
  semestre: String,
  modified: number
}
@Component({
  selector: 'app-registrpro',
  templateUrl: './registrpro.page.html',
  styleUrls: ['./registrpro.page.scss'],
})
export class RegistrproPage implements OnInit {  
  datos: Datos[]= [];
  formularioRegistro:FormGroup;
  newUsuario: Datos = <Datos>{};
  // usuarios:ApiAlmJson[]=[];
  newDato: Datos= <Datos>{};
  @ViewChild('myList')myList : IonList
  data: Datos= <Datos>{};
  // usuario:datousu
  usuarionue={
    id: 0,
    usuario:'',
    contrasenna:'', 
    recontrasenna:'',   
    carrera:'',
    semestre:'',
    modified: 0,
}
  constructor(
    private usuarioservice:UsuarioAluService,
    // private apiService:ApiAlmJsonService,
    private router:Router,
    private storageService: UsuarioAluService,
    private plt: Platform, private toastController: ToastController,
    private alertController : AlertController,
    private fb: FormBuilder  
    
    ) {
      this.formularioRegistro = this.fb.group({
        'id': this.data.id,
        'usuario': new FormControl("", Validators.required),
        'contrasenna': new FormControl("", Validators.required),
        'recontrasenna': new FormControl("", Validators.required),
        'carrera': new FormControl("",Validators.required),
        'semestre': this.data.semestre,
        'modified': this.data.modified,
      }
    )
      this.plt.ready().then(()=>{
        this.loadDatos();   
      })
      
     }
//get
loadDatos(){
  this.storageService.getDatos().then(dato=>{
      this.datos=dato;
  })
}
  //Create
  submitForm(){
    var form = this.formularioRegistro.value;
    var IsExist= false;
    var IsValidPass= false;
    if(this.formularioRegistro.invalid){
      console.log("alerta error invalido")
    }
    else{
      this.newUsuario.usuario = form.usuario,
      this.newUsuario.id = form.id,
      this.newUsuario.contrasenna = form.contrasenna,
      this.newUsuario.recontrasenna = form.recontrasenna,
      this.newUsuario.modified = form.modified,
      this.newUsuario.carrera = form.carrera,
      this.newUsuario.semestre = form.semestre,
      
      this.usuarioservice.getDatos().then(data=>{
        this.datos=data;
        if(!data || data.length==0){
          this.usuarioservice.addDatos(this.newUsuario).then(dato=>{
            this.newUsuario=<Datos>{};
            this.showToast('¡Usuario creado con exito!')
          });
        }
        else{
          for(let obj of this.datos){
            if(this.newUsuario.usuario==obj.usuario){
              IsExist=true;
            }
            if(this.newUsuario.contrasenna== this.newUsuario.recontrasenna){
              IsValidPass=true;
            }
          }
          if(IsExist){
            console.log("ERROR, YA EXISTE, FALSO")
            this.formularioRegistro.reset();
          }
          else if(IsValidPass==false){
            console.log("Reingrese su contrasenna y validacion")
            this.formularioRegistro.reset();
          }
          else{
            this.usuarioservice.addDatos(this.newUsuario).then(data=>{
              // var carreraTOUP=form.carrera.toUpperCase();
              // if(carreraTOUP=="INGENIERIA INFORMATICA"||carreraTOUP=="INGENIERA MECANICA"||carreraTOUP=="INGENIERIA COMERCIAL"||carreraTOUP=="INGENIERIA EN COMERCIO EXTERIOR"||carreraTOUP=="ingenieria en comercio exterior"){
                this.router.navigate(['inisespro'])    
                console.log("No existe el usuario, se permite registrar")
              
              // else{
              //   console.log("Necesita ingresar Ingenieria Informatica, ingenieria mecanica, Ingenieria comercial, Ingenieria en comercio exterior ")
              // }
              this.newUsuario=<Datos>{};
              this.showToast("Se creo usuario")
            }); 
            this.formularioRegistro.reset();

          }
        }
      })
    }
  }

// ALERTAS

async alertError1(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: '¡Debe completar todos los datos!',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertError2(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'Debe completar el campo de Usuario correctamente. ¡Este debe tener de 5 a más caracteres!',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertError3(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'Debe completar el campo de CONTRASENNA correctamente. ¡Este debe tener sobre 8 carácteres!',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertError4(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'El campo de validacion Contrasenna no es valido. ¡Reescriba correctamente su PASS!',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertError5(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'Debe ingresar correctamente su campo de carrera ¡Vuelva a intentarlo!',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertCorreoDuplicado(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'El Usuario ingresado ya existe',
    buttons: ['Aceptar']
  })
  await alert.present();
}

// Fin de ALERTAS
//update
updateDatos(dato:Datos){
  dato.usuario= `UPDATED: ${dato.usuario}`;
  dato.modified= Date.now();
  this.storageService.updateDatos(dato).then(item=>{
    this.showToast('Usuario Actualizado!')
    this.myList.closeSlidingItems();
    this.loadDatos();
  })
}
//delete
deleteDatos(dato:Datos){
  this.storageService.deleteDatos(dato.id).then(item=>{
    this.showToast('Usuario Eliminado!');
    this.myList.closeSlidingItems();
    this.loadDatos();
  })
}
async showToast(msg){
  const toast = await this.toastController.create({
    message: msg,
    duration:2000
  });
  toast.present();
}

  ngOnInit() {
    
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
  
}
