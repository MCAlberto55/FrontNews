import { TestBed } from '@angular/core/testing';

import { RssAddService } from './rss-add.service';

describe('RssAddService', () => {
  let service: RssAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RssAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
