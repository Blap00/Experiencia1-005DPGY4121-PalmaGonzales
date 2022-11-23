import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
import { IntFeriados } from '../interfaces/int-feriados';
@Injectable({
  providedIn: 'root'
})
export class FeriadoService {
  // httpOptions={
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin':'*'
  //   })
  // }IntFeriados
  // corsSolution= 'https://cors-anywhere.herokuapp.com/';//don't work ERROR 403
  restapiURL='https://api.victorsanmartin.com/feriados/en.json'
  constructor(private http: HttpClient,) { }
  getFeriados() {
    return this.http.get<IntFeriados>(`${this.restapiURL}`);
  }

  // new
  // const response: Reponse = await window.fetch('https://example.com/my/api')
}
