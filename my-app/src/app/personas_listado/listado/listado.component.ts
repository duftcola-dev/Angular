import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  listadoPersonas:string[]=["Robin","Jhon","Lucas","Samuel"];
  personaBorrada:string[]=([]as string[]);
  
  constructor() {}

  ngOnInit(): void {
    console.log("ListadoComponent ready")
  }

  borrarPersona(){
    let p:string=this.listadoPersonas.shift()!;
    this.personaBorrada.push(p);
  }

  Reset(){
    this.listadoPersonas=["Robin","Jhon","Lucas","Samuel"];
    this.personaBorrada=[];
  }
}
