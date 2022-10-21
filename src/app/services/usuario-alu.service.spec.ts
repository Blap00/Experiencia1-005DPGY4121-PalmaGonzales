import { TestBed } from '@angular/core/testing';

import { UsuarioAluService } from './usuario-alu.service';

describe('UsuarioAluService', () => {
  let service: UsuarioAluService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioAluService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
