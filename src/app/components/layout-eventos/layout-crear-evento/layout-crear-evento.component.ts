import { Evento } from './../../../models/evento.model';
import { EventoService } from './../../../servicios/eventos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-crear-evento',
  templateUrl: './layout-crear-evento.component.html',
  styleUrls: ['./layout-crear-evento.component.css']
})
export class LayoutCrearEventoComponent implements OnInit {
  evento: Evento = {
    id_evento: undefined,
    id_administrativo: 1,
    fecha: "",
    hora: "",
    lugar: "",
    descripcion: ""
  }


  constructor(
    private eventoServicio: EventoService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    if (params.id) {
      this.eventoServicio.getEvento(params.id).subscribe(
        (res: Evento) => {
          console.log(res);
          this.evento = res;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  guardarEvento() {
    this.eventoServicio.guardarEvento(this.evento).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/eventos']);
      },
      (err) => console.error(err)
    );
  }

}
