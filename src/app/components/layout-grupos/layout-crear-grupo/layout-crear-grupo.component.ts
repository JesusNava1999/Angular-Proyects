import { Grupo } from './../../../models/grupo.model';
import { GrupoService } from './../../../servicios/grupos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-crear-grupo',
  templateUrl: './layout-crear-grupo.component.html',
  styleUrls: ['./layout-crear-grupo.component.css']
})
export class LayoutCrearGrupoComponent implements OnInit {
  grupo: Grupo = {
   id_grupo: undefined,
   id_materia: 1,
   id_docente: 1,
   id_estudiante: 1,
   descripcion: "",
   tipo: "",
   codigo: undefined
  }
  constructor(
    private grupoServicio: GrupoService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    if (params.id) {
      this.grupoServicio.getGrupo(params.id).subscribe(
        (res: Grupo) => {
          console.log(res);
          this.grupo = res;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  guardarGrupo() {
    this.grupoServicio.guardarGrupo(this.grupo).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/grupos']);
      },
      (err) => console.error(err)
    );
  }

}
