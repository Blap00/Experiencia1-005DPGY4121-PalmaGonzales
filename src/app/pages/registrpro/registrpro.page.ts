import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { JsonUsers } from '../../models/json-users';
import { ApiAlmJsonService } from '../../services/api-alm-json.service';
import { Router } from '@angular/router';

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
  newDato: Datos= <Datos>{};
  @ViewChild('myList')myList : IonList
  data: JsonUsers
  usuario:datousu
  usuarionue={
    id: 0,
    usuario:'',
    contrasenna:'',    
    carrera:'',
    semestre:'',
    modified: 0,
}
  constructor(
    private apiService:ApiAlmJsonService,
    private router:Router,
    private storageService: UsuarioAluService,
    private plt: Platform, private toastController: ToastController 
    ) {
      this.data = new JsonUsers();
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
    this.usuario=this.usuarionue;
    this.data = this.usuario
    this.apiService.createItem(this.data).subscribe((response) => {
      console.log("submit")
    });
    this.newDato = this.usuario;
    this.newDato.modified= Date.now();
    this.newDato.id= Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato=<Datos>{};
      this.showToast('¡Usuario Registrado!');
      this.loadDatos();
    })
    this.router.navigate(['inisesalu'])    
  }
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
