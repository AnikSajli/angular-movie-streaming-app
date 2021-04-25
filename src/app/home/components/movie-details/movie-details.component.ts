import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieQueryService} from "../../../services/movie-query.service";
import {MovieDetailsModel, MovieModel, MovieReviewModel} from "../../models/movie-data.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: string;
  movieDetails: MovieDetailsModel;
  similarMovieList: MovieModel;
  movieReview: MovieReviewModel;

  constructor(
    private route: ActivatedRoute,
    private movieQueryService: MovieQueryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovieDetails();
      this.getSimilarMovies();
      this.getMovieTrailer();
      this.getMovieReviews();
    })
  }

  getSimilarMovies() {
    this.movieQueryService.fetchSimilarMovies(this.movieId)
      .subscribe(res => {
       this.similarMovieList = res.results
      });
  }

  getMovieDetails() {
    this.movieQueryService.fetchMovieDetailsById(this.movieId).subscribe(res => {
      this.movieDetails = res;
    });
  }

  getMovieTrailer(): void {
    this.movieQueryService.fetchMovieTrailers(this.movieId)
      .subscribe(res => {
      })
  }

  getMovieReviews(): void {
    this.movieQueryService.fetchMovieReviews(this.movieId)
      .subscribe(res => {
        this.movieReview = res;
      })
  }
}
