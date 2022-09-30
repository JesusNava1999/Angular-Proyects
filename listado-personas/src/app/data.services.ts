import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
@Injectable()
export class DataServices {
  /* Se encargara de establecer la comunicacion con la BD */
  constructor(private httpClient: HttpClient) {}

  cargarPersonas(){
    return this.httpClient.get('https://listado-personas-bfb6c-default-rtdb.firebaseio.com/datos.json');
  }

  /* Metodo guardar personas */
  guardarPersonas(personas: Persona[]){
    this.httpClient.put('https://listado-personas-bfb6c-default-rtdb.firebaseio.com/datos.json', personas).subscribe(
      response => console.log('Resultado de guardar Persona: ' + response),
      error => console.log('ERROR al guardar personas: ' + error)
    );
    /* Realtime necesitamos un nombre como se almacenan los datos */
    /* Suscribirnos */
    /* Aun no leemos de la base de datos, esto es por medio de post y en lugar de 
    utilizarlo utilizaremos el PUT y remplace la informacion */
      
  }
  modificarPersona(index:number, persona: Persona){
    let url: string;
    url = 'https://listado-personas-bfb6c-default-rtdb.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, persona).subscribe(
      response => console.log('Resultado modificar persona: ' + response),
    error => console.log('ERROR EN MODIFICAR PERSONA: ' + error)
    )
  }
  /* Debido a la falta de un indice es necesario manejar uno en el objeto persona */
  /* Para eliminar haremos lo siguiente... */
  eliminarPersona(index: number){
    let url: string;
    url = 'https://listado-personas-bfb6c-default-rtdb.firebaseio.com/datos/' + index + '.json';
    this.httpClient.delete(url).subscribe(
      response => console.log('Resultado eliminar persona: ' + response),
    error => console.log('ERROR EN ELIMINAR PERSONA: ' + error)
    )
  }
}
