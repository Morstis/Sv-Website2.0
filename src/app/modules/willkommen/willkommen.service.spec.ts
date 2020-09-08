import { TestBed } from '@angular/core/testing';

import { WillkommenService } from './willkommen.service';

describe('WillkommenService', () => {
  let service: WillkommenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WillkommenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
