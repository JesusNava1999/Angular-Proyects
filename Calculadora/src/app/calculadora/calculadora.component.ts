import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent{
  a = "";
  b = "";
  suma = 0;

  sumar (){
    const a = parseInt(this.a);
    const b = parseInt(this.b);
    this.suma = (a + b);
  }
}
