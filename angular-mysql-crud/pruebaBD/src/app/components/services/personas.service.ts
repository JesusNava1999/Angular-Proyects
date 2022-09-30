import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaService {
  API_URI = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  getPersonas() {
    return this.httpClient.get<Persona[]>(`${this.API_URI}/personas`);
  }

  getPersona(id: string): any{
    return this.httpClient.get(`${this.API_URI}/personas/${id}`);
  }

  guardarPersona(persona: Persona) {
    return this.httpClient.post(`${this.API_URI}/personas`, persona);
  }

  eliminarPersona(id: string) {
    return this.httpClient.delete(`${this.API_URI}/personas/${id}`);
  }

  actualizarPersona(id: string|undefined|number, personaActualizada: Persona): Observable<any>{
    return this.httpClient.put(
      `${this.API_URI}/personas/${id}`,
      personaActualizada
    );
  }
}
