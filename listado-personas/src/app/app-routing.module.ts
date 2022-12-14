import { PersonasComponent } from './personas/personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'personas',
    component: PersonasComponent,
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ],
    /* Son rutas hijas de personas y para ello utilizaremos
  childrots */
  },

  /* Agregaremos otro pad por si nuestra url fallan */
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
