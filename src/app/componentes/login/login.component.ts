import { Component, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: string;
  public pass: string;
  constructor(private nombreBar: BarService) { }

  ngOnInit(): void {
    this.nombreBar.nombre$.emit('Login');
  }
  borrar(): void{
    this.user = this.pass = '';
  }
  aceptar(): void{
    console.log( 'user', this.user);
    console.log( 'pass', this.pass);
  }
}
