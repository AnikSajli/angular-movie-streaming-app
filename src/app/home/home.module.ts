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
import { MovieReviewsComponent } from './components/movie-reviews/movie-reviews.component';
import {MatDividerModule} from '@angular/material/divider';
import { ReviewContentComponent } from './components/review-content/review-content.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { MovieCastsComponent } from './components/movie-casts/movie-casts.component';
import {MovieDetailsResolver} from "./resolvers/movie-details.resolver";


@NgModule({
  declarations: [
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    SimilarMoviesComponent,
    MoviePrintQualityComponent,
    MovieReviewsComponent,
    ReviewContentComponent,
    MovieCastsComponent,
  ],
  exports: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    InfiniteScrollModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent
      },
      // {
      //   path: 'details/:id',
      //   component: MovieDetailsComponent
      // },
      {
        path: 'details/:id',
        component: MovieDetailsComponent,
        resolve: { movieDetails: MovieDetailsResolver }
      },
    ])
  ]
})
export class HomeModule { }
