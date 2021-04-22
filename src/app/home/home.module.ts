import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from "./containers/movie-list/movie-list.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent
      }
    ])
  ]
})
export class HomeModule { }
