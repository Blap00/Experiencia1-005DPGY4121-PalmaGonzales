import { TestBed } from '@angular/core/testing';

import { UsuarioProService } from './usuario-pro.service';

describe('UsuarioProService', () => {
  let service: UsuarioProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
