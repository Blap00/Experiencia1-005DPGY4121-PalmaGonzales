import { TestBed } from '@angular/core/testing';

import { NoIngresadoaluGuard } from './no-ingresadoalu.guard';

describe('NoIngresadoaluGuard', () => {
  let guard: NoIngresadoaluGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoaluGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
