import { Publicacion } from './../../../models/publicacion.model';
import { PublicacionService } from './../../../servicios/publicaciones.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout-crear-publicacion',
  templateUrl: './layout-crear-publicacion.component.html',
  styleUrls: ['./layout-crear-publicacion.component.css']
})
export class LayoutCrearPublicacionComponent implements OnInit {
  publicacion: Publicacion = {
    id_publicacion: undefined,
    id_usuario: 2,
    id_grupo: 1,
    contenido: "",
    contador_vistas: 1
  }
  constructor(
    private publicacionServicio: PublicacionService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    if (params.id) {
      this.publicacionServicio.getPublicacion(params.id).subscribe(
        (res: Publicacion) => {
          console.log(res);
          this.publicacion = res;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  guardarPublicacion() {
    this.publicacionServicio.guardarPublicacion(this.publicacion).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/paginaPrincipal']);
      },
      (err) => console.error(err)
    );
  }

}
