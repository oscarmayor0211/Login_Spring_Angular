import { TestBed } from '@angular/core/testing';

import { EnviarCorreoService } from './enviar-correo.service';

describe('EnviarCorreoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarCorreoService = TestBed.get(EnviarCorreoService);
    expect(service).toBeTruthy();
  });
});
