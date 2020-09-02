import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  public numero1: number;
  public numero2: number;
  public promedio: number;
  public suma: number;
  constructor() { }

  ngOnInit(): void {
  }
  calcular(): void{
    this.suma = this.numero2 + this.numero1;
    this.promedio = this.suma / 2;
  }
  limpiar(): void{
    this.numero1 = this.numero2 = 0;
    this.promedio = this.suma = 0;
  }
}
