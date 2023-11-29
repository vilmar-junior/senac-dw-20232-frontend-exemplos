import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteDetalheComponent } from './fabricante-detalhe.component';

describe('FabricanteDetalheComponent', () => {
  let component: FabricanteDetalheComponent;
  let fixture: ComponentFixture<FabricanteDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabricanteDetalheComponent]
    });
    fixture = TestBed.createComponent(FabricanteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
