import { TestBed } from '@angular/core/testing';

import { IngresadoaluGuard } from './ingresadoalu.guard';

describe('IngresadoaluGuard', () => {
  let guard: IngresadoaluGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoaluGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
