import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//Implementaremos un Sistema CRUD con LocalStorage en BBDD
export interface Datos{
  id: number;
  usuario: string;
  contrasenna: string;
  recontrasenna:String;
  carrera: string;
  semestre: string;
  modified: number;
}
const ITEMS_KEY= 'my-dato';
@Injectable({
  providedIn: 'root'
})
export class UsuarioProService {
  private _storage: Storage | null = null;
  

  constructor(private storage: Storage) { 
    this.init();
  }

    async init(){

      const storage= await this.storage.create();
      this._storage=storage;
    }
  async addDatos(dato:Datos):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos: Datos[])=>{
      if(datos){
        //Implementamos el metodo push para agregar un objeto a una coleccion con Keys y valor
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      }else{
        return this.storage.set(ITEMS_KEY, [dato]);
      }
    })
  }
  //Leer Datos:
  // Método que devolverá un Promise con una colecciónde objetos (Datos[ ]), JSON
  getDatos(): Promise<Datos[]>{
    //Se captura desde el objeto storage, a través del método get, lasclaves de los objetos almacenados
    return this.storage.get(ITEMS_KEY)
  }
  //UPD Datos:
  async updateDatos(dato:Datos):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos:Datos[])=>{
      if(!datos || datos.length==0){
        return null;
        //si la coleccion no contiene ningun dato, esta pregunta devolvera Falso y no devolvera nada
      }
      let newDato:Datos[]=[];
      //creamos una nueva coleccion y luego buscaremos el valor a actualizar mediante su KEY
      for(let i of datos){
        if(i.id === dato.id){
          newDato.push(dato);
        }
        else{
          newDato.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newDato);
      //modificamos el Storage con los datos seleccionados
    })
  }
  //delete:
  //deleteDatos(): Método que recibe un id (Key) y devolverá unpromise.
  async deleteDatos(id:number): Promise<Datos>{
    //Se captura desde el objeto storage, a través del método get, lasclaves de los objetos almacenados.
    return this.storage.get(ITEMS_KEY).then((datos:Datos[])=>{
      if(!datos||datos.length==0){
        return null;
        //Comprobamos si la colección tiene o no objetos y devuelva nullen caso de que corresponda.
      }
      //Creamos una nueva colección y se almacenan en ella los objetosque sean diferentes a la Key que se busca para eliminar.
      let toKeep: Datos[]= []
      for(let i of datos){
        if(i.id !== id){
          toKeep.push(i);
          //Devolvemos al set de Keys, la colección con los objetos noeliminados.
        }
      }
      return this.storage.set(ITEMS_KEY,toKeep);
    })
  }
}
