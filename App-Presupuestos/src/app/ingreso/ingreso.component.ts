import { IngresoServicio } from './ingreso.servicio';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  /* En esta clase necesitamos acceder a los arreglos para desplejar en nuestro */
  ingresos: Ingreso[] = [];
  constructor(private IngresoServicio: IngresoServicio) {}

  /* Inyectar una Instancia */
  ngOnInit(): void {
    this.ingresos = this.IngresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.IngresoServicio.eliminar(ingreso);
  }
}
