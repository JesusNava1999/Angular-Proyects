import { Evento } from './../../../models/evento.model';
import { EventoService } from './../../../servicios/eventos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-gestionar-evento',
  templateUrl: './layout-gestionar-evento.component.html',
  styleUrls: ['./layout-gestionar-evento.component.css']
})
export class LayoutGestionarEventoComponent implements OnInit {

  evento: Evento = {
    id_evento: undefined,
    id_administrativo: undefined,
    fecha: "",
    hora: "",
    lugar: "",
    descripcion: ""
  };

  t: any;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    this.t = params;
    if (params.id) {
      this.eventoService.getEvento(params.id).subscribe(
        (res: Evento) => {
          console.log(res);//si manda la información en consola y luego se crashea jaja
          this.evento = res;
          //this.edit = true;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  actualizarEvento(id: number){
    this.eventoService.actualizarEvento(id, this.evento).subscribe(
      res => {
        console.log(res);
        res.writeHead(status);
        res.write(res);
        //this.edit=false;
        this.router.navigate(['/eventos']);
      },
      err => console.error(err)
    );
  }

}
