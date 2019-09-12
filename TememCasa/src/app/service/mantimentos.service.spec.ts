import { TestBed } from '@angular/core/testing';

import { MantimentosService } from './mantimentos.service';

describe('MantimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantimentosService = TestBed.get(MantimentosService);
    expect(service).toBeTruthy();
  });
});
