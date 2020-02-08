import { TestBed } from '@angular/core/testing';

import { GenericStoreService } from './generic-store.service';

describe('GenericStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericStoreService = TestBed.get(GenericStoreService);
    expect(service).toBeTruthy();
  });
});
