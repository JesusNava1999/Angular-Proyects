import { Grupo } from './../../models/grupo.model';
import { GrupoService } from './../../servicios/grupos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-grupos',
  templateUrl: './layout-grupos.component.html',
  styleUrls: ['./layout-grupos.component.css']
})
export class LayoutGruposComponent implements OnInit {

  grupos: any = [];
  mensaje:string="";

  constructor(
    private grupoService: GrupoService
  ) { }

  ngOnInit(): void {
    this.getGrupos();
  }

  getGrupos(): any {
    this.grupoService.getGrupos().subscribe(
      res => {
        if(res.length > 0){
          this.grupos = res;
          this.mensaje = "";
        }
        else{
          this.mensaje = "Comienza agregando grupos";
        }
      },
      err => console.error(err)
    );
  }

  eliminarGrupo(id: string){
    this.grupoService.eliminarGrupo(id).subscribe(
      res => {
        console.log(res);
        this.getGrupos();
      },
      err => console.log(err)
    );
  }
}
