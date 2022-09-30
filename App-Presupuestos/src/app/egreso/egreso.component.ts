import { EgresoServicio } from './egreso.servicio';
import { Egreso } from './egreso.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  /* Definimos el arreglo vacio e importamos */
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;
  /* Agregamos el servicio */
  constructor(private EgresoServicio: EgresoServicio) {}

  ngOnInit(): void {
    /* Inicializamos el arreglo */
    this.egresos = this.EgresoServicio.egresos;
  }
  /* Metodo para eliminar un egreso */
  eliminarEgreso(egreso: Egreso) {
    this.EgresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor/this.ingresoTotal;
  }
}
