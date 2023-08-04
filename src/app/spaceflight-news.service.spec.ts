import { TestBed } from '@angular/core/testing';

import { SpaceflightNewsService } from './spaceflight-news.service';

describe('SpaceflightNewsService', () => {
  let service: SpaceflightNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceflightNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
