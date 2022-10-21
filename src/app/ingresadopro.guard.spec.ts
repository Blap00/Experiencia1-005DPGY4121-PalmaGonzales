import { TestBed } from '@angular/core/testing';

import { IngresadoproGuard } from './ingresadopro.guard';

describe('IngresadoproGuard', () => {
  let guard: IngresadoproGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IngresadoproGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
