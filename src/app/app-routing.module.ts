import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : '' , component : LoginComponent},
  {path : 'error' , component : ErrorComponent},
  {path : 'calculo' , component : CalculoComponent},
  {path : 'bienvenido' , component : BienvenidosComponent},
  {path : '*' , pathMatch : 'full' , redirectTo : 'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
