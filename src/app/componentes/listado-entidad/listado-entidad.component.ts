import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { __importDefault } from 'tslib';
import { Persona } from 'src/app/clases/persona';
import { timer } from 'rxjs';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listado: [Persona];
  @Output() verDetalle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  VerEntidad(entidad): void {
    this.verDetalle.emit(entidad);
  }
}
