import {Component} from '@angular/core';

@Component({
    selector: "app-contandor",
    templateUrl: "./contador.component.html",
    
})
export class ContadorComponent{
    public title:string = 'Contador';
    public contador:number = 0;
    public base:number=5;
  
    add(){
      this.contador=this.contador+1;
    }
  
    subs(){
      this.contador=this.contador-1;
    }
  
    accumulate(value:number){
      this.contador=this.contador+value;
    }
}
