import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //rutaLogo: string = "/src/images/logoTecmmSocial.png"
  titulo: string = "TecMM Social"

  constructor() { }

  ngOnInit(): void {
  }



}
