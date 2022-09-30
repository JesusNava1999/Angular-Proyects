import { PublicacionService } from './servicios/publicaciones.service';
import { GrupoService } from './servicios/grupos.service';
import { EventoService } from './servicios/eventos.service';
import { HttpClientModule } from '@angular/common/http'

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { LayoutPerfilComponent } from './components/layout-perfil/layout-perfil.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { CalendarioComponent } from './components/layout-eventos/calendario/calendario.component';
import { LayoutCrearEventoComponent } from './components/layout-eventos/layout-crear-evento/layout-crear-evento.component';
import { LayoutCrearGrupoComponent } from './components/layout-grupos/layout-crear-grupo/layout-crear-grupo.component';
import { LayoutEventosComponent } from './components/layout-eventos/layout-eventos.component';
import { LayoutGestionarEventoComponent } from './components/layout-eventos/layout-gestionar-evento/layout-gestionar-evento.component';
import { LayoutGestionarGrupoComponent } from './components/layout-grupos/layout-gestionar-grupo/layout-gestionar-grupo.component';
import { LayoutGruposComponent } from './components/layout-grupos/layout-grupos.component';
import { LayoutCrearPublicacionComponent } from './components/pagina-principal/layout-crear-publicacion/layout-crear-publicacion.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    LayoutGruposComponent,
    PaginaPrincipalComponent,
    CalendarioComponent,
    LayoutEventosComponent,
    LayoutPerfilComponent,
    LayoutCrearEventoComponent,
    LayoutGestionarEventoComponent,
    LayoutGestionarGrupoComponent,
    LayoutCrearGrupoComponent,
    InicioComponent,
    RegistroComponent,
    FooterComponent,
    LayoutCrearPublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    EventoService,
    GrupoService,
    PublicacionService
  ],
  bootstrap: [AppComponent, InicioComponent]
})
export class AppModule { }
