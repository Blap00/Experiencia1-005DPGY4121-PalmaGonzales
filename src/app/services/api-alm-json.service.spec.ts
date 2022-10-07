import { TestBed } from '@angular/core/testing';

import { ApiAlmJsonService } from './api-alm-json.service';

describe('ApiAlmJsonService', () => {
  let service: ApiAlmJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAlmJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
