import { LayoutCrearPublicacionComponent } from './components/pagina-principal/layout-crear-publicacion/layout-crear-publicacion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { LayoutPerfilComponent } from './components/layout-perfil/layout-perfil.component';
import { LayoutGruposComponent } from './components/layout-grupos/layout-grupos.component';
import { LayoutEventosComponent } from './components/layout-eventos/layout-eventos.component';
import { LayoutCrearGrupoComponent } from './components/layout-grupos/layout-crear-grupo/layout-crear-grupo.component';
import { LayoutGestionarEventoComponent } from './components/layout-eventos/layout-gestionar-evento/layout-gestionar-evento.component';
import { LayoutCrearEventoComponent } from './components/layout-eventos/layout-crear-evento/layout-crear-evento.component';
import { LayoutGestionarGrupoComponent } from './components/layout-grupos/layout-gestionar-grupo/layout-gestionar-grupo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '',
    component: BarraNavegacionComponent,
    children: [
      { path: 'paginaPrincipal', component: PaginaPrincipalComponent },
      { path: 'grupos', component: LayoutGruposComponent },
      { path: 'eventos', component: LayoutEventosComponent },
      { path: 'perfil', component: LayoutPerfilComponent },
      { path: 'crearGrupo', component: LayoutCrearGrupoComponent },
      { path: 'editarGrupo/:id_grupo', component: LayoutGestionarGrupoComponent },
      { path: 'editarEvento/:id_evento', component: LayoutGestionarEventoComponent },
      { path: 'crearEvento', component: LayoutCrearEventoComponent },
      { path: 'crearPublicacion', component: LayoutCrearPublicacionComponent}
     ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
