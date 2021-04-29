import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from "./containers/movie-list/movie-list.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './containers/movie-details/movie-details.component';
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';
import { MoviePrintQualityComponent } from './components/movie-print-quality/movie-print-quality.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    SimilarMoviesComponent,
    MoviePrintQualityComponent,
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
      },
      {
        path: 'details/:id',
        component: MovieDetailsComponent
      },
    ])
  ]
})
export class HomeModule { }
