import { Component, Input, OnInit } from '@angular/core';
import { Entidad } from '../../clases/entidad';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() entidad: Entidad = new Entidad();
  
  constructor() { }

  ngOnInit(): void {
  }


  
}