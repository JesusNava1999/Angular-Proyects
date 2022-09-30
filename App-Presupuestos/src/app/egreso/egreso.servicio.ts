import { Egreso } from "./egreso.model";

//Manejar el arreglo de los egresos por medio de un servicio
export class EgresoServicio{
  egresos: Egreso [] = [
    new Egreso ("Renta Netflix", 400),
    new Egreso ("Calzones y Papel de Baño", 200)
  ];
  /* Metodo eliminar en el servicio */
  eliminar(egreso: Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    /* Remover un indice con el metodo splice, solo un elemento */
    this.egresos.splice(indice,1);
  }
}
