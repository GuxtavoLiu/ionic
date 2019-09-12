import { TestBed } from '@angular/core/testing';

import { MantimentoService } from './mantimento.service';

describe('MantimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantimentoService = TestBed.get(MantimentoService);
    expect(service).toBeTruthy();
  });
});
