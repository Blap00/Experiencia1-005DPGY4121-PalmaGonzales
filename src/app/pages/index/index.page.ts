import { Component, OnInit } from '@angular/core';
interface Correo{
  email: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  correo1='duocuc.cl';
  correo2='profesor.duoc.cl'
  pusuario={
    email:'',
  }
  email=this.pusuario.email;
  correosplitted= this.pusuario.email.split("@",2)[1];  
  constructor() { }
  splitted= this.email.split("@", 3)
  ngOnInit() {
  }
  // onSubmit1(){
  //   this.correosplitted= this.pusuario.email.split("@",2)[1];  
  //   console.log((this.correosplitted));
  //   console.log("submit");
  //   this.correo1=this.correo1;
  //   if (this.correosplitted == this.correo1){
  //     console.log("Funciono IF del DUOCUC.CL");
  //   }
  //   else if(this.correosplitted == this.correo2){
  //     console.log("funciono IF del profesor");
  //   }
  //   else{
  //     console.log("TRAMPOSO NO EXISTE ESE ERROR");
  //   }
  // }
  // onSubmit2(){
  //   this.correosplitted= this.pusuario.email.split("@",2)[1];  
  //   console.log((this.correosplitted));
  //   console.log("submit");
  //   this.correo1=this.correo1;
  //   if (this.correosplitted == this.correo1){
  //     console.log("Funciono IF del DUOCUC.CL");
  //   }
  //   else if(this.correosplitted == this.correo2){
  //     console.log("funciono IF del profesor");
  //   }
  //   else{
  //     console.log("TRAMPOSO NO EXISTE ESE ERROR");
  //   }
  // }
}
