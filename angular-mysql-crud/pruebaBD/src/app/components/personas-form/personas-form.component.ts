import { PersonaService } from './../services/personas.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css'],
})
export class PersonasFormComponent implements OnInit {
  persona: Persona = {
    id_persona: undefined,
    nombre: '',
  };
  edit: boolean = false;

  constructor(
    private personaServicio: PersonaService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activedRouter.snapshot.params;
    if (params.id) {
      this.personaServicio.getPersona(params.id).subscribe(
        (res: Persona) => {
          console.log(res);//si manda la información en consola y luego se crashea jaja
          this.persona = res;
          this.edit = true;
        },
        (err: any) => {
          console.log('Error :(((');
          console.error(err);
        }
      );
    }
  }

  guardarPersona() {
    //console.log(this.persona);
    this.personaServicio.guardarPersona(this.persona).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/personas']);
      },
      (err) => console.error(err)
    );
  }

  actualizarPersona(){
    this.personaServicio.actualizarPersona(this.persona.id_persona, this.persona).subscribe(
      res => {
        console.log(res);
        res.writeHead(status);
        res.write(res);
        this.edit=false;
        this.router.navigate(['/personas']);
      },
      err => console.error(err)
    );
  }
}
