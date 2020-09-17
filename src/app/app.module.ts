import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BarService } from './services/bar.service';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoComponent } from './componentes/paises/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidosComponent,
    NavbarComponent,
    CalculoComponent,
    ListadoEntidadComponent,
    ControlEntidadComponent,
    ListadoComponent,
    DetalleEntidadComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
