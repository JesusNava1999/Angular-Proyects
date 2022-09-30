import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  @Input() a: string;
  @Input() b: string;

  @Output() suma: number;

  sumar() {
    this.suma = (parseInt(this.a) + parseInt(this.b));
  }
}
