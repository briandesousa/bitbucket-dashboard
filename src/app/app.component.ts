import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Branch Banking Dashboard';
  projectName : string = 'BBSALES';
  instructions : string = `This dashboard displays a list of Git repositories in the ${this.projectName} project in BitBucket.`;

  repositories : Repository[] = [
    new Repository("Repo1", 103, 34),
    new Repository("Repo2", 4, 23),
    new Repository("Repo3", 59, 12)
  ];
};

/**
 * A source code repository within a BitBucket project.
 */
export class Repository { 
  constructor(
    public name : string, 
    public branchCount : number,
    public openPullRequestCount : number) {}
};
