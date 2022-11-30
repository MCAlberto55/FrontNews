import { TestBed } from '@angular/core/testing';

import { SearchNewsService } from './search-news.service';

describe('SearchNewsService', () => {
  let service: SearchNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
