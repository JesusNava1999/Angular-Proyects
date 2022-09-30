import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { PersonaService } from './components/services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonasFormComponent,
    PersonasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
