import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiAlmJson } from '../interface/interfaceAlu';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/json-users',{ responseType: 'json' }
    );
  }
}
