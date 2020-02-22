/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NachhilfeService } from './nachhilfe.service';

describe('Service: Nachhilfe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NachhilfeService]
    });
  });

  it('should ...', inject([NachhilfeService], (service: NachhilfeService) => {
    expect(service).toBeTruthy();
  }));
});
