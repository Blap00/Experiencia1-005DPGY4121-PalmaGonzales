import { Component, OnInit } from '@angular/core';

interface Carrera{
  name: string;
  value: number;
}

interface Semestre{
  sem: string;
  value: number;
}

@Component({
  selector: 'app-inisespro',
  templateUrl: './inisespro.page.html',
  styleUrls: ['./inisespro.page.scss'],
})
export class InisesproPage implements OnInit {
  usuario={
    user:'',
    pass:'',    
    carrera:'',
    semestre:'',
}
  
  constructor() { }
  
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
  ngOnInit() {
  }

}