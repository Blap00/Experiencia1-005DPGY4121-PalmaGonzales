import { TestBed } from '@angular/core/testing';

import { SesproGuard } from './sespro.guard';

describe('SesproGuard', () => {
  let guard: SesproGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesproGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
