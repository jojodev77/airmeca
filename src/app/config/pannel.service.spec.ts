import { TestBed } from '@angular/core/testing';

import { PannelService } from './pannel.service';

describe('PannelService', () => {
  let service: PannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
