import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from './../models/publicacion.model';
import { Observable } from 'rxjs';

@Injectable()
export class PublicacionService {
  API_URI = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  getPublicaciones() {
    return this.httpClient.get<Publicacion[]>(`${this.API_URI}/paginaPrincipal`);
  }

  getPublicacion(id: string): any{
    return this.httpClient.get(`${this.API_URI}/paginaPrincipal/${id}`);
  }

  guardarPublicacion(publicacion: Publicacion) {
    return this.httpClient.post(`${this.API_URI}/paginaPrincipal`, publicacion);
  }

  eliminarPublicacion(id: string) {
    return this.httpClient.delete(`${this.API_URI}/paginaPrincipal/${id}`);
  }

  actualizarPublicacion(id: string|undefined|number, publicacionActualizada: Publicacion): Observable<any>{
    return this.httpClient.put(
      `${this.API_URI}/paginaPrincipal/${id}`,
      publicacionActualizada
    );
  }


}
