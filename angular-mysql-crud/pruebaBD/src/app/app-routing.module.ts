import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
  {
    path:'personas', component: PersonasListComponent
  },
  {
    path:'personas/agregar', component: PersonasFormComponent
  },
  {
    path:'personas/editar/:id', component: PersonasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
