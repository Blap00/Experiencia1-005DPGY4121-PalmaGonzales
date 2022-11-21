import { TestBed } from '@angular/core/testing';

import { ProvidersRestApiService } from './providers-rest-api.service';

describe('ProvidersRestApiService', () => {
  let service: ProvidersRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
