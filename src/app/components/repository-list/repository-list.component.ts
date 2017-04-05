import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() private error = new EventEmitter;

  constructor(private _repositoryListService: RepositoryListService) { }

  ngOnInit() {
    this._repositoryListService.getRepositoryList(this.project).subscribe(
      repositories => this._repositories = repositories,
      error => this.error.emit(error)
    );
  }

  getRepositories(): Repository[] {
    return this._repositories;
  }

}
