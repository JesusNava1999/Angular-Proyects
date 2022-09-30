import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento.model';
import { Observable } from 'rxjs';

@Injectable()
export class EventoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  getEventos() {
    return this.httpClient.get<Evento[]>(`${this.API_URI}/eventos`);
  }

  getEvento(id: string): any{
    return this.httpClient.get(`${this.API_URI}/eventos/${id}`);
  }

  guardarEvento(evento: Evento) {
    return this.httpClient.post(`${this.API_URI}/eventos`, evento);
  }

  eliminarEvento(id: string) {
    return this.httpClient.delete(`${this.API_URI}/eventos/${id}`);
  }

  actualizarEvento(id: string|undefined|number, eventoActualizado: Evento): Observable<any>{
    return this.httpClient.put(
      `${this.API_URI}/eventos/${id}`,
      eventoActualizado
    );
  }


}
