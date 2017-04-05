import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { RepositoryListService } from './services/repository-list.service';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticComponent,
    RepositoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    RepositoryListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
