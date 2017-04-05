import { Component } from '@angular/core';

import { Repository } from './model/repository';

@Component({
  selector: 'bd-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'Branch Banking Dashboard';
  projectName = 'BBSALES';
  instructions = `This dashboard displays a list of Git repositories in the ${this.projectName} project in BitBucket.`;

  repositories: Repository[] = [
    new Repository('Repo1', ''),
    new Repository('Repo2', ''),
    new Repository('Repo3', '')
  ];

};
