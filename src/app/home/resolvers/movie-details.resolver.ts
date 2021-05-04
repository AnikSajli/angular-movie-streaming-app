import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {MovieDetailsModel} from "../models/movie-data.model";
import {Observable} from "rxjs";
import {MovieQueryService} from "../../services/movie-query.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<MovieDetailsModel>{

  constructor(private route: Router,
              private movieQueryService: MovieQueryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<MovieDetailsModel> | Promise<MovieDetailsModel> | MovieDetailsModel {
    const movieId = route.params['id'];
    return this.movieQueryService.fetchMovieDetailsById(movieId);
  }
}
