import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';

const routes: Routes = [
  {
    // path: '',
    // component: SidenavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
