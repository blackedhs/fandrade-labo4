import { Component } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labo4';
  public edadUno: number;
  public edadDos: number;
  public suma: number;
  public promedio: number;
  
  CalcularClick(){
      
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma /2 ;
    document.getElementById('pPromedio').style.display = 'block';
    document.getElementById('pSuma').style.display = 'block';

  }
  LimpiarClick(){
    this.edadUno =0;
    this.edadDos =0;
    document.getElementById('pPromedio').style.display = 'none';
    document.getElementById('pSuma').style.display = 'none';
  }
}
