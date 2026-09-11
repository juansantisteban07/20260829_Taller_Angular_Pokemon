import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluacion3275760 } from './evaluacion.3275760';

describe('Evaluacion3275760', () => {
  let component: Evaluacion3275760;
  let fixture: ComponentFixture<Evaluacion3275760>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evaluacion3275760]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evaluacion3275760);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
