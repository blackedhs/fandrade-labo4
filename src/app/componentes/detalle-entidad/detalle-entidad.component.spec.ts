import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntidadComponent } from './detalle-entidad.component';

describe('DetalleEntidadComponent', () => {
  let component: DetalleEntidadComponent;
  let fixture: ComponentFixture<DetalleEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
