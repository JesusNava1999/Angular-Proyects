import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//Componente Padre de nuestra APP
//Funciones en base a elementos
export class AppComponent {
  //Declaramos los arreglos de nuestros servicios
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  //Inyectar una dependencia de los servicios
  constructor(
    private IngresoServicio: IngresoServicio,
    private EgresoServicio: EgresoServicio
  ) {
    /* Aprovechamos el constructor para inicializar los atributos
    de nuestra clase */
    this.ingresos = IngresoServicio.ingresos;
    this.egresos = EgresoServicio.egresos;
  }

  /* Generamos metodos para los egresos totales de manera dinamica */
  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  /* Metodo para calcular porcentajes */
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  /* Metodo Presupuesto total */
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
