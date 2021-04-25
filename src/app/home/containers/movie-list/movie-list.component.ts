import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";
import {MovieQueryService} from "../../../services/movie-query.service";
import {Router} from "@angular/router";
import {
  MovieDetailsModel, MovieGenreModel,
  MovieModel,
  UpcomingMovieModel
} from "../../models/movie-data.model";

@Component({
  selector: 'app-university-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  popularMovielist: MovieModel[] = [];
  topRatedMovielist: MovieModel[] = [];
  latestMovielist: MovieDetailsModel[] = [];
  upcomingMovielist: UpcomingMovieModel[] = [];
  movieGenres: MovieGenreModel[];

  constructor( private http: HttpClient,
               private firebaseDB: AngularFireDatabase,
               private movieQueryService: MovieQueryService,
               private router: Router) { }

  ngOnInit(): void {
    this.getMovieGenres();
    this.getPupularMovies();
    this.getTopRatedMovies();
    this.getLatestMovies();
    this.getUpcomingMovies();
  }

  getTopRatedMovies(): void {
    this.movieQueryService.fetchTopRatedMovieList().subscribe(data => {
      this.topRatedMovielist = data.results.splice(0,4);
    });
  }

  getPupularMovies(): void {
    this.movieQueryService.fetchPopularMovieList().subscribe(data => {
      this.popularMovielist = data.results.splice(0,4);
    });
  }

  getLatestMovies(): void {
    this.movieQueryService.fetchLatestMovieList().subscribe(data => {
      this.latestMovielist = [data];
    });
  }

  getUpcomingMovies(): void {
    this.movieQueryService.fetchUpcomingMovieList().subscribe(data => {
      this.upcomingMovielist = data.results.splice(0,4);
    });
  }

  getMovieGenres(): void {
    this.movieQueryService.fetchMovieGenres().subscribe(data => {
      this.movieGenres = data.genres;
    });
  }
}
