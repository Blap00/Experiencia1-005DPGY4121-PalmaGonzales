import { Component, OnInit, ViewChild } from '@angular/core'; 
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


// interface Carrera{
//   name: string;
//   value: number;
// }
// interface Semestre{
//   sem: string;
//   value: number;
// }

@Component({
  selector: 'app-registralu',
  templateUrl: './registralu.page.html',
  styleUrls: ['./registralu.page.scss'],
})
export class RegistraluPage implements OnInit {
  datos: Datos[]= [];
  newDato: Datos= <Datos>{};
  @ViewChild('myList')myList : IonList
usuario={
  user:'',
  pass:'',    
  carr:'',
  seme:'',
}
  
  constructor(
    private storageService: UsuarioAluService,
    private plt: Platform, private toastController: ToastController 
    ) {
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
  addDatos(){
    this.newDato.modified= Date.now();
    this.newDato.id= Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato=<Datos>{};
      this.showToast('¡Datos Agregados!');
      this.loadDatos();
    })
  }
  //update
  updateDatos(dato:Datos){
    dato.usuario= 'UPDATED: ${dato.usuario}';
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
