import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-perfil',
  templateUrl: './layout-perfil.component.html',
  styleUrls: ['./layout-perfil.component.css']
})
export class LayoutPerfilComponent implements OnInit {
  esEstudiante:boolean = true;
  modoEdicion: boolean = true;
  numeroDeControl:string = "18011108";
  nombrePerfil:string = "José de Jesús Nava Cuellar";
  constructor() { }

  ngOnInit(): void {
  }

}
