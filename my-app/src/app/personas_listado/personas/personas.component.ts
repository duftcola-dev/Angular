import { Component } from "@angular/core";


@Component({
    selector:"app-personas",
    templateUrl:"./personas.component.html",
})
export class PersonasComponent{
    nombre:string="Robin";
    edad:number=30;
    direccion:string="londres 27";
    telefono:number=1234567;
    soltero:boolean=true;

    getCapitalized():string{
        return this.nombre.toUpperCase();
    }

    getData():string{
        return `${this.nombre} - ${this.edad} - ${this.direccion}`
    }

    cambiarNombre(){
        this.nombre="Bill Bur";
    }

    cambiarEdad(){
        this.edad=12;
    }

}