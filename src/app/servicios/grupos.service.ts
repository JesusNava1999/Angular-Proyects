import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from './../models/grupo.model';
import { Observable } from 'rxjs';

@Injectable()
export class GrupoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) {}

  getGrupos() {
    return this.httpClient.get<Grupo[]>(`${this.API_URI}/grupos`);
  }

  getGrupo(id: string): any{
    return this.httpClient.get(`${this.API_URI}/grupos/${id}`);
  }

  guardarGrupo(grupo: Grupo) {
    return this.httpClient.post(`${this.API_URI}/grupos`, grupo);
  }

  eliminarGrupo(id: string) {
    return this.httpClient.delete(`${this.API_URI}/grupos/${id}`);
  }

  actualizarGrupo(id: string|undefined|number, grupoActualizado: Grupo): Observable<any>{
    return this.httpClient.put(
      `${this.API_URI}/grupos/${id}`,
      grupoActualizado
    );
  }


}
