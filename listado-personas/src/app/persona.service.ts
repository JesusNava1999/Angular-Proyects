import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable() // Inyectamos el servicio en la clave
export class PersonaService {
  personas: Persona[] = [
    /* new Persona('Julia', 'Montoya'),
    new Persona('Jesús', 'Nava'),
    new Persona('Oscar', 'Ortiz'),
    new Persona('Said', 'Gallegos'), */
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {
    // Instancia de
  }

  /* Metodo para modificar el arreglo una vez inicializado */
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeConsola(
      'Agregamos persona: ' + persona.nombre + ' ' + persona.apellido
    );
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }
  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    /* Esto sera suficiente para eliminar pero NO es lo mas optimo 
    lo ideal es volver a cargar el arreglo para que en la BD se regernen los indices y no queden espacios 
    entre las personas */
    this.modificarPersonas();
  }
  modificarPersonas() {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }
}
