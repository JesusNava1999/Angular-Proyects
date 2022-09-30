import { PersonaService } from '../../persona.service';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona ;
  @Input() indice: number;

  constructor(private personaService: PersonaService) {

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emitirSaludo(){
    this.personaService.saludar.emit(this.indice);
  }

}


