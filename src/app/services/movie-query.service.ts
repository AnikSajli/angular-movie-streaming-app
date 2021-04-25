import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieQueryService {

  constructor(
    private http: HttpClient,
  ) {
  }

   header = {
    headers: new HttpHeaders()
      .set('Authorization',
        environment.tmdbReadAccessToken)
  }

  fetchTopRatedMovieList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + environment.tmdbAPIkey +
    '&language=en-US&page=2')
  }

  fetchUpcomingMovieList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=?' + environment.tmdbAPIkey +
      '&language=en-US&page=1', this.header)
  }

  fetchLatestMovieList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/latest?' + environment.tmdbAPIkey +
      '&language=en-US&page=1', this.header)
  }

  fetchMovieDetailsById(movieId: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + environment.tmdbAPIkey + '&language=en-US',
      this.header)
  }

  fetchPopularMovieList(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?' + environment.tmdbAPIkey +
      '&language=en-US&page=1', this.header)
  }

  fetchMovieGenres(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key='
      + environment.tmdbAPIkey+ '&language=en-US',
      this.header)
  }

  fetchSimilarMovies(movieId: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=' +
      + environment.tmdbAPIkey+ '&language=en-US&page=1',
      this.header)
  }

  fetchMovieTrailers(movieId: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=' +
      + environment.tmdbAPIkey+ '&language=en-US',
      this.header)
  }

  fetchMovieReviews(movieId: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/reviews?api_key=' +
      + environment.tmdbAPIkey+ '&language=en-US&page=1',
      this.header)
  }

  fetchMovieCredits(movieId: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/reviews?api_key=' +
      + environment.tmdbAPIkey+ '&language=en-US&page=1',
      this.header)
  }
}
