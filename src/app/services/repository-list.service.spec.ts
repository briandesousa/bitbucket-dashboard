import { TestBed, inject } from '@angular/core/testing';

import { RepositoryListService } from './repository-list.service';

describe('RepositoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryListService]
    });
  });

  it('should return at least 1 repository in the list', inject([RepositoryListService], (service: RepositoryListService) => {
    expect(service).toBeTruthy();
    expect(service.getRepositoryList('BBSALES').length).toBeGreaterThanOrEqual(1);
  }));
});
