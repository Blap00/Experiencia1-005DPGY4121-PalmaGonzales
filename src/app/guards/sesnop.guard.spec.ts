import { TestBed } from '@angular/core/testing';

import { SesnopGuard } from './sesnop.guard';

describe('SesnopGuard', () => {
  let guard: SesnopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesnopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
