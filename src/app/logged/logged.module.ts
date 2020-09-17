import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';



@NgModule({
  declarations: [
    // SidenavComponent
  ],
  imports: [
    CommonModule,
    // LoggedRoutingModule
  ]
})
export class LoggedModule { }
