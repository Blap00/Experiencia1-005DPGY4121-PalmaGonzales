import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpBackend, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeriadoService {
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }
  corsSolution= 'https://cors-anywhere.herokuapp.com/';//don't work ERROR 403
  restapiURL='https://apis.digital.gob.cl/fl/feriados'
  constructor(private http: HttpClient,) { }
  getFeriados() {
    return this.http.get(`${this.restapiURL}/2022`);
  }

  // new
  // const response: Reponse = await window.fetch('https://example.com/my/api')
}
