import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieQueryService} from "../../../services/movie-query.service";
import {MovieCast, MovieDetailsModel, MovieModel, MovieReviewModel} from "../../models/movie-data.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: string;
  movieDetails: MovieDetailsModel;
  similarMovieList: any[];
  similarMovieImgURLs: string[] = [];
  movieReview: MovieReviewModel;
  imgUrl: string;
  movieCasts: MovieCast[];
  isLoaded: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieQueryService: MovieQueryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovieDetails();
      this.getSimilarMovies();
      this.getMovieTrailer();
      this.getMovieCredits();
      this.getMovieReviews();
    })
  }

  getSimilarMovies() {
    this.movieQueryService.fetchSimilarMovies(this.movieId)
      .subscribe(res => {
       this.similarMovieList = res?.results.splice(0,4)
        this.similarMovieList.forEach(movie => {
          console.log(movie.poster_path)
          this.similarMovieImgURLs.push(this.getImage(movie.poster_path));
        })
      });
  }

  getMovieDetails() {
    this.movieQueryService.fetchMovieDetailsById(this.movieId).subscribe(res => {
      this.movieDetails = res;
      this.imgUrl = this.getImage(this?.movieDetails?.poster_path);
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

  getMovieCredits(): void {
    this.movieQueryService.fetchMovieCredits(this.movieId)
      .subscribe(res => {
        this.movieCasts = res.cast
        this.isLoaded = true;
      })
  }

  getImage(posterPath: string): string {
    return this.imgUrl = environment.imageBaseUrl + posterPath;
  }
}
