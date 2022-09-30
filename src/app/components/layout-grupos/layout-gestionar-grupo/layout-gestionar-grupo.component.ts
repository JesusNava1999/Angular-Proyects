import { GrupoService } from './../../../servicios/grupos.service';
import { Grupo } from './../../../models/grupo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-gestionar-grupo',
  templateUrl: './layout-gestionar-grupo.component.html',
  styleUrls: ['./layout-gestionar-grupo.component.css'],
})
export class LayoutGestionarGrupoComponent implements OnInit {
  grupo: Grupo = {
    id_grupo: undefined,
    id_materia: 1,
    id_docente: 1,
    id_estudiante: 1,
    descripcion: '',
    tipo: '',
    codigo: undefined,
  };

  t: any;

  constructor(
    private grupoService: GrupoService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    this.t = params;
    if (params.id) {
      this.grupoService.getGrupo(params.id).subscribe(
        (res: Grupo) => {
          console.log(res);//si manda la información en consola y luego se crashea jaja
          this.grupo = res;
          //this.edit = true;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  actualizarGrupo(id: number){
    this.grupoService.actualizarGrupo(id, this.grupo).subscribe(
      res => {
        console.log(res);
        res.writeHead(status);
        res.write(res);
        //this.edit=false;
        this.router.navigate(['/grupos']);
      },
      err => console.error(err)
    );
  }
}
