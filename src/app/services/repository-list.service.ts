import { Injectable } from '@angular/core';

import { Repository } from '../model/repository';

@Injectable()
export class RepositoryListService {

  constructor() { }

  getRepositoryList(projectName: string): Repository[] {
    const repositories: Repository[] = [];

    // return mock data
    const repo1: Repository = new Repository('C3', 'http://localhost:7990/projects/BBSALES/repos/c3/');
    const repo2: Repository = new Repository('CoreAccount', 'http://localhost:7990/projects/BBSALES/repos/coreaccount');

    repositories.push(repo1);
    repositories.push(repo2);

    return repositories;
  }

}
