import { Evento } from './../../models/evento.model';
import { EventoService } from './../../servicios/eventos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-eventos',
  templateUrl: './layout-eventos.component.html',
  styleUrls: ['./layout-eventos.component.css']
})
export class LayoutEventosComponent implements OnInit {

  eventos:any = [];
  mensaje:string="";

  constructor(
    private eventoService: EventoService
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): any {
    this.eventoService.getEventos().subscribe(
      res => {
        if(res.length > 0){
          this.eventos = res;
          this.mensaje = "";
        }
        else{
          this.mensaje = "Comienza agregando eventos";
        }
      },
      err => console.error(err)
    );
  }

  eliminarEvento(id: string){
    this.eventoService.eliminarEvento(id).subscribe(
      res => {
        console.log(res);
        this.getEventos();
      },
      err => console.log(err)
    );
  }

}
