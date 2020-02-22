/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NachhilfeStoreService } from './nachhilfe-store.service';

describe('Service: NachhilfeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NachhilfeStoreService]
    });
  });

  it('should ...', inject([NachhilfeStoreService], (service: NachhilfeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
