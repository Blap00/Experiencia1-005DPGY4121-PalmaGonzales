import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioAluService, Datos } from 'src/app/services/usuario-alu.service';
interface Asigna{
  NomASI:String,
  ValASI:Number,
}
interface Hora{
  Horario:String,
  ValHora:Number,
}
@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.page.html',
  styleUrls: ['./codigoqr.page.scss'],
})
export class CodigoqrPage implements OnInit {
  usua={
    id: Date.now(),
    nom: '',
    Class:'',
    Horar:'',
    car:''
  }

  scannedResult:any;
  dateTim: String;
  usuariodat:Datos[]=[];
  qrCodeString:any;

  usuario={
    id: Date.now(),
    nom: '',
    car:'',
    hor:'',
  }
  idUs:Number
  usuarios=''
  asigna: Asigna[]=[
    {
      NomASI: 'APP Movil',
      ValASI: 1,
    },
    {
      NomASI: 'Cal Software',
      ValASI: 2,
    },
    {
      NomASI: 'INGLES Intermedio',
      ValASI: 3,
    },
    {
      NomASI: 'ARQ SOFTWARE',
      ValASI: 4,
    },
    {
      NomASI: 'EST Descriptiva',
      ValASI: 5,
    },
    
  ];
  hora: Hora[]=[
    {
      Horario: '11:31-13:50',
      ValHora: 1,
    },
    {
      Horario: '14:00-15:30',
      ValHora: 2,
    },
    {
      Horario: '16:00-17:20',
      ValHora: 3,
    },
    {
      Horario: '17:30-18:50',
      ValHora: 4,
    },
    {
      Horario: '19:00-20:00',
      ValHora: 5,
    },
    
  ];
  constructor(private menuController : MenuController,
    public alertCtrl: AlertController, private navController:NavController, private usuarioservice:UsuarioAluService) { }
    ngOnInit() {
      this.usuarioservice.getDatos().then(datos=>{
        this.usuariodat = datos; 
        
      console.log(datos)

      
    })
      if(localStorage.getItem('sesnop')){
        localStorage.setItem('ingresapro','true')
        localStorage.removeItem('sesnop')
        localStorage.removeItem('ingresaalu')
      }
      else if(localStorage.getItem('ingresaalu')){
        localStorage.removeItem('sesnop')
        this.navController.navigateRoot(['/alumno']);
      }
      else{
        localStorage.removeItem('sesnop')
        localStorage.removeItem('ingresaalu')
        localStorage.setItem('ingresapro','true')
      }
    }
    
    generarQR(){
      console.log(this.usuariodat)
      
      for(let obj of this.usuariodat){
        // this.usua.nom=obj.usuario.toString()
        if(!obj.semestre){
          if(obj.usuario==this.usua.nom){
            this.usua.Class
            this.usua.Horar
            this.usua.car=obj.carrera.toString()
            this.usua.nom
            this.usua.id
            this.qrCodeString=this.usua.Class +' '+ this.usua.Horar +' '+ this.usua.car+' '+this.usua.nom + ' '+ this.usua.id
          // if(obj.usuario==this.usua.Usuario && obj.contrasenna==this.usua.Password){
          // this.usuario.nom=obj.usuario.toString()    
          // this.usuario.car=obj.carrera.toString()
          // this.usuario.sem=obj.semestre.toString()
          // this.usuario.id=obj.id;  
          // this.usuarios= this.usuario.nom.toString() + this.usuario.car.toString() + this.usuario.sem.toString()
          // console.log("Aplicaciones Moviles")
          // this.qrCodeString=this.usuario.nom.toString() +' '+ this.usuario.car.toString() +' '+ this.usuario.sem.toString()+' '+this.usuario.id
          // console.log(this.qrCodeString)
          // break;
          // }
          }
        }
        else{
          this.usuario.nom="NOEXISTE"
          this.usuario.car="NOEXISTE"
          this.usuario.id=0

        }
      }
    }
    VerQR(){
      this.scannedResult=this.qrCodeString
    }


  mostrarMenu(){
    this.menuController.open('first');
    this.menuController.enable(true,'first');
    this.menuController.enable(false,'second');
    
  }
}
