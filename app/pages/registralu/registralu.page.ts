import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { JsonUsers } from '../../models/json-users';
import { ApiAlmJsonService } from '../../services/api-alm-json.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder, 
} from '@angular/forms';
import {AlertController} from '@ionic/angular';

// interface Carrera{
//   name: string;
//   value: number;
// }
// interface Semestre{
//   sem: string;
//   value: number;
// }
interface datousu{
  id: number;
  usuario: String,
  contrasenna: String,    
  carrera: String,
  semestre: String,
  modified: number
}

@Component({
  selector: 'app-registralu',
  templateUrl: './registralu.page.html',
  styleUrls: ['./registralu.page.scss'],
})
export class RegistraluPage implements OnInit {
  datos: Datos[]= [];

  formularioRegistro:FormGroup;
  newUsuario: Datos = <Datos>{};

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
    private plt: Platform, private toastController: ToastController,
    private alertController : AlertController,
    private fb: FormBuilder) {
      this.formularioRegistro = this.fb.group({
        'id': new FormControl(""),
        'usuario': new FormControl("", Validators.required),
        'contrasenna': new FormControl("", Validators.required),
        'carrera': new FormControl("",Validators.required),
        'semestre': new FormControl("",Validators.required),
        'modified': new FormControl(""),


      })
      this.data = new JsonUsers();
      this.plt.ready().then(()=>{
        this.loadDatos();   
      })
      
     }

     async CrearUsuario(){
      var form=this.formularioRegistro.value;
      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header:'datos incompletos',
          message:'ebe completas todos los campos',
          buttons:['Aceptar'],
        });
        await alert.present();
        return;
      }
      this.newUsuario.usuario = form.usuario,
      this.newUsuario.id = form.id,
      this.newUsuario.contrasenna = form.pass,
      this.newUsuario.modified = form.modified,
      this.newUsuario.carrera = form.carrera,
      this.newUsuario.semestre = form.semestre,
      this.storageService.addDatos(this.newUsuario).then(dato =>{
        this.newUsuario = <Datos>{};
        this.showToast('Datos Agregados!');
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
    var usuarioencontrado= 
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
      this.showToast('¡Datos Agregados!');
      this.loadDatos();
    })
    this.router.navigate(['inisesalu'])    
  }
  //update
  updateDatos(dato:Datos){
    dato.usuario= `UPDATED: ${dato.usuario}`;
    dato.modified= Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento Actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    })
  }
  //delete
  deleteDatos(dato:Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento Eliminado!');
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
  // carrera: Carrera[]=[
  //   {
  //     name: 'Ingenieria Informatica',
  //     value: 1,
  //   },
  //   {
  //     name: 'Analista Programador',
  //     value: 2,
  //   },
  //   {
  //     name: 'Ingenieria Mecanica',
  //     value: 3,
  //   },
  //   {
  //     name: 'Auditor contador',
  //     value: 4,
  //   },
    
  // ];
  // semestre: Semestre[]=[
  //   {
  //     sem: 'Primer semestre',
  //     value: 1,
  //   },
  //   {
  //     sem: 'Segundo Semestre',
  //     value: 2,
  //   },
  //   {
  //     sem: 'Tercer semestre',
  //     value: 3,
  //   },
  //   {
  //     sem: 'Cuarto Semestre',
  //     value: 4,
  //   },
    
  // ];
  ngOnInit() {
  }
  onSubmit(){
    console.log("Submit")
  }
}
