import { Ingreso } from "./ingreso.model";


//Manejar el arreglo de los ingresos por medio de un servicio
export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 4000),
    new Ingreso("Venta de Auto", 50000)
  ];
  /* Metodo eliminar en el servicio */
  eliminar(ingreso: Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    //Remover un indice con el metodo splice, solo un elemento
    this.ingresos.splice(indice,1);
  }
}
