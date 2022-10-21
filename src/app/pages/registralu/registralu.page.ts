import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { JsonUsers } from '../../models/json-users';
import { ApiAlmJsonService } from '../../services/api-alm-json.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { ApiAlmJson } from 'src/app/interface/interfaceAlu';
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
  usuarios:ApiAlmJson[]=[];
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
    private usuarioservice:UsuariosService,
    private apiService:ApiAlmJsonService,
    private router:Router,
    private storageService: UsuarioAluService,
    private plt: Platform, private toastController: ToastController,
    private alertController : AlertController,
    private fb: FormBuilder) 
    {
      this.data = new JsonUsers();
      this.formularioRegistro = this.fb.group({
        'id': this.data.id,
        'usuario': new FormControl("", Validators.required),
        'contrasenna': new FormControl("", Validators.required),
        'carrera': new FormControl("",Validators.required),
        'semestre': new FormControl("",Validators.required),
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
    let a =0;
    let b =0;
    let c=0;
    
    var form=this.formularioRegistro.value;
    var carreraTOUP="";
    var semestreTOUP="";
    this.newUsuario.usuario = form.usuario,
    this.newUsuario.id = form.id,
    this.newUsuario.contrasenna = form.pass,
    this.newUsuario.modified = form.modified,
    this.newUsuario.carrera = form.carrera,
    this.newUsuario.semestre = form.semestre,
    this.usuarioservice.getUsers().subscribe(resp =>{
      for (let index = 0; index<=this.usuarios.length; index++) {
        // console.log(form.usuario)
        // console.log(this.usuarios[index].usuario)
        if((this.usuarios[index].usuario)==(form.usuario)){
          console.log("Usuario existente");
          a=1;
          if(a==1){
            break;
          }
        }
        else if((this.usuarios[index].usuario)!=(form.usuario)){
          b++;
          
          if(b==this.usuarios.length){
            for (let index = 0; index < form.contrasenna.length; index++) {
              c++
            }
            if(c>=5){
              carreraTOUP=form.carrera.toUpperCase();
              if(carreraTOUP=="INGENIERIA INFORMATICA"||carreraTOUP=="INGENIERA MECANICA"||carreraTOUP=="INGENIERIA COMERCIAL"||carreraTOUP=="INGENIERIA EN COMERCIO EXTERIOR"||carreraTOUP=="ingenieria en comercio exterior"){
                //mejorar este IF
                semestreTOUP=form.semestre.toUpperCase();
                console.log(semestreTOUP)
                let semestredisponibles=['PRIMER SEMESTRE', 'SEGUNDO SEMESTRE', 'TERCER SEMESTRE', 'CUARTO SEMESTRE']
                for (let i = 0; i < semestredisponibles.length; i++) {
                  if(semestreTOUP==semestredisponibles[i]){
                    this.storageService.addDatos(this.newUsuario).then(dato =>{
                      this.newUsuario = <Datos>{};
                      this.showToast('Datos Agregados!');
                      this.loadDatos();
                    })
                    console.log(form)
                    this.usuario=form;
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
                
                    console.log("No existe el usuario, se permite registrar")
                    break;
                  }
                  else{
                    console.log("Necesita ingresar un semestre de el primero a cuarto semestre")
                    console.log(semestredisponibles.length)
                  }
                }
              }
              else{
                console.log("Necesita ingresar Ingenieria Informatica, ingenieria mecanica, Ingenieria comercial, Ingenieria en comercio exterior ")
              }
            }
            else{
              console.log("necesita ingresar de 5 a más caracteres")
            }
          }
        }    
        else{
          console.log("simplemente no existio")
        }
      }
    })

  
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
  ngOnInit() {
    this.usuarioservice.getUsers().subscribe(resp =>{
      console.log('usuarios', resp);
      this.usuarios= resp
    })
  }
}