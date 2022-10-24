import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import { PersonasComponent } from "./personas/personas.component";

@NgModule({
    declarations: [
        PersonasComponent,
        ListadoComponent
      ],
      exports:[
        PersonasComponent,
        ListadoComponent
      ],
      imports: [
        CommonModule
      ],
})
export class PersonasListadoModule{

}