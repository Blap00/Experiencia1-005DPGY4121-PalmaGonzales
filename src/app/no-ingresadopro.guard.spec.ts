import { TestBed } from '@angular/core/testing';

import { NoIngresadoproGuard } from './no-ingresadopro.guard';

describe('NoIngresadoproGuard', () => {
  let guard: NoIngresadoproGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoproGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
