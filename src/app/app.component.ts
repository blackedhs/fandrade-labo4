import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labo4';
  public edadUno = '';
  public edadDos = '';
  public suma;
  public promedio;
  CalcularClick(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma /2 ;
    document.getElementById('pPromedio').style.display = 'block';
    document.getElementById('pSuma').style.display = 'block';
  }
  LimpiarClick(){
    this.edadUno ='';
    this.edadDos ='';
    document.getElementById('pPromedio').style.display = 'none';
    document.getElementById('pSuma').style.display = 'none';
  }
}
