import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RepositoryListComponent } from './repository-list.component';
import { RepositoryListService } from '../../services/repository-list.service';
import { Repository } from '../../model/repository';


class MockRepositoryListService extends RepositoryListService {
  getRepositoryList(projectName: string): Repository[] {
    const repositories: Repository[] = [];
    repositories.push(new Repository('repo1', 'http://localhost:7990/projects/BBSALES/repos/repo1/'));
    repositories.push(new Repository('repo2', 'http://localhost:7990/projects/BBSALES/repos/repo2/'));
    repositories.push(new Repository('repo3', 'http://localhost:7990/projects/BBSALES/repos/repo3/'));
    return repositories;
  }
}

describe('RepositoryListComponent', () => {

  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ],
      providers: [
        { provide: RepositoryListService, useClass: MockRepositoryListService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('ul'));
    element = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all repositories in the list', () => {
    component.project = 'ABC';
    fixture.detectChanges();
    expect(element.querySelectorAll('li').length).toEqual(3);
  });
});
