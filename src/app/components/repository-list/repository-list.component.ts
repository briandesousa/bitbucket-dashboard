import { Component, OnInit, Input } from '@angular/core';

import { RepositoryListService } from '../../services/repository-list.service';
import { Repository } from '../../model/repository';

@Component({
  selector: 'bd-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {

  private _repositories: Repository[] = [];
  @Input() project: string;

  constructor(private _repositoryListService: RepositoryListService) { }

  ngOnInit() {
    this._repositories = this._repositoryListService.getRepositoryList(this.project);
  }

  getRepositories(): Repository[] {
    return this._repositories;
  }

}
