import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { InventarioPokemon } from './pokemon';

describe('InventarioPokemon', () => {
  let component: InventarioPokemon;
  let fixture: ComponentFixture<InventarioPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioPokemon],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
