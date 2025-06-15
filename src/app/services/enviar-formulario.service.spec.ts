import { TestBed } from '@angular/core/testing';

import { EnviarFormularioService } from './enviar-formulario.service';

describe('EnviarFormularioService', () => {
  let service: EnviarFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
