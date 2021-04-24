import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieQueryService} from "../../../services/movie-query.service";
import {MovieDetailsModel} from "../../models/movie-data.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: string;
  movieDetails: MovieDetailsModel;
  constructor(
    private route: ActivatedRoute,
    private movieQueryService: MovieQueryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovieDetails();
    })
  }

  getMovieDetails() {
    this.movieQueryService.fetchMovieDetailsById(this.movieId).subscribe(res => {
      this.movieDetails = res;
    });
  }

}
