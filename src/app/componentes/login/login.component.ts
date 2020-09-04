import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new Usuario();
  constructor(private nombreBar: BarService , public route: Router) { }

  ngOnInit(): void {
    this.nombreBar.nombre$.emit('Login');
  }
  borrar(): void{
    this.user.nombre = this.user.clave = '';
  }
  aceptar(): void{
    if ( this.user.nombre === 'admin' &&  this.user.clave === 'admin' ) {
      // tslint:disable-next-line: no-unused-expression
      this.route.navigate(['bienvenido']);
      console.log('entre');
    }
    else{
      this.route.navigate(['error']);
      console.log( 'user', this.user.nombre);
      console.log( 'pass', this.user.clave);
    }
  }
}
