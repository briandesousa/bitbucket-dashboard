import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repository } from '../model/repository';

@Injectable()
export class RepositoryListService {

  private _repositories: Repository[] = [];

  constructor(private http: Http) { }

  getRepositoryList(projectName: string): Observable<Repository[]> {
    const repoListUrl = `http://localhost:7990/rest/api/1.0/projects/${projectName}/repos`;

    return this.http.get(repoListUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    const repositories: Repository[] = [];

    console.log(body);

    for(const repo of body.values) {
      repositories.push(new Repository(repo.slug, repo.links.clone[1].href));
    }

    return repositories || { };
  }

  private handleError(error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}
