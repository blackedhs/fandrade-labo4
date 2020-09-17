import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
// import { LoggedModule } from './logged/logged.module';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : '' , component: BienvenidosComponent},
  {path : 'error' , component : ErrorComponent},
  {path : 'calculo' , component : CalculoComponent},
  {path : 'control' , component : ControlEntidadComponent},
  {path : 'bienvenido' , component : BienvenidosComponent},
  {path : '*' , pathMatch : 'full' , redirectTo : 'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
