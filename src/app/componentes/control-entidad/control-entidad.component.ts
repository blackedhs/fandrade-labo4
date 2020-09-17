import { Component, OnInit } from '@angular/core';
import { ConsumoApiService} from 'src/app/services/consumo-api.service';
import { Persona } from 'src/app/clases/persona';
import { Entidad } from 'src/app/clases/entidad';
@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {
  public consumo: Persona;
  public Seleccion: Entidad;
  constructor(public api: ConsumoApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((dato: Persona) => {
      this.consumo = dato;
    }, (error: any) => alert(error));
  }
  entidadSeleccionada(entidad): void {
    this.Seleccion = entidad;
  }
}
