import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/personas.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas:any = [];
  mensaje:string="";

  constructor(private personaServicio:PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.personaServicio.getPersonas().subscribe(
      res => {
        if(res.length > 0){
          this.personas = res;
          this.mensaje = "";
        }
        else{
          //console.log("Arreglo vacío");
          this.mensaje = "Comienza agregando personas";
        }
        //console.log(res)
      },
      err => console.error(err)
    );
  }

  eliminarPersona(id: string){
    //console.log(id);
    this.personaServicio.eliminarPersona(id).subscribe(
      res => {
        console.log(res);
        this.getPersonas();
      },
      err => console.log(err)
    );
  }

}
