import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


  personas: Persona[] = [];

  constructor(private personaservice: PersonaService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.personaservice.obtenerPersonas().subscribe(
      (personas: Persona[])  => {
        this.personas = personas;
        this.personaservice.setPersonas(personas);
      }
    )
  }

  agregar(){
    /* Nos dirigimos a la Ruta */
    this.router.navigate(['personas/agregar']);
  }

}
