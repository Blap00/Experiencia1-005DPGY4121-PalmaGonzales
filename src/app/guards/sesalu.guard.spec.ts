import { TestBed } from '@angular/core/testing';

import { SesaluGuard } from './sesalu.guard';

describe('SesaluGuard', () => {
  let guard: SesaluGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesaluGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
