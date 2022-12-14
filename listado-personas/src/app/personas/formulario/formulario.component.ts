import { Persona } from './../../persona.model';
import { PersonaService } from '../../persona.service';
import { LoggingService } from '../../LoggingService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput = '';
  apellidoInput = '';
  index: number;
  modoEdicion: number;

  constructor(
    private loggingservice: LoggingService,
    private personasService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + (indice + 1))
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    /* Recuperaremos el parametro */
    /* "+" tipo de parseo para convertir  */
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    /* No es necesario preguntar el indice del objeto seleccionado */
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;

    } else {

    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
