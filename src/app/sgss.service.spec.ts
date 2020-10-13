import { TestBed } from '@angular/core/testing';

import { SGSSService } from './sgss.service';

describe('SGSSService', () => {
  let service: SGSSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGSSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
