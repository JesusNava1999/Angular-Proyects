import { Publicacion } from './../../models/publicacion.model';
import { PublicacionService } from './../../servicios/publicaciones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  publicaciones:any = [];
  mensaje:string="";

  constructor(
    private publicacionService: PublicacionService
  ) { }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.publicacionService.getPublicaciones().subscribe(
      res => {
        if(res.length > 0){
          this.publicaciones = res;
          this.mensaje = "";
        }
        else{
          this.mensaje = "Comienza agregando publicaciones";
        }
      },
      err => console.error(err)
    );
  }

  eliminarPublicacion(id: string){
    this.publicacionService.eliminarPublicacion(id).subscribe(
      res => {
        console.log(res);
        this.getPublicaciones();
      },
      err => console.log(err)
    );
  }

}
