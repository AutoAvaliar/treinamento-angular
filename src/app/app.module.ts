import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InicioComponent } from './inicio/inicio.component';

import {ROUTES} from './app.routes'
import {RouterModule} from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AutorComponent } from './autores/autor/autor.component'
import {AutoresService} from './autores/autores.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InicioComponent,
    AutoresComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [AutoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
