import {Component, Inject, Input, OnInit} from '@angular/core';
import {MovieDetailsModel, MovieGenreModel} from "../../models/movie-data.model";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movieInfo: MovieDetailsModel
  @Input()
  totalMovieGenreList: MovieGenreModel[]
  genreNames: string[] = [];
  displayGenreList: string[] = [];
  imgUrl: string;
  defaultImage = "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-600w-99335579.jpg";
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.imgUrl = this.getImage();
    this.genreNames = this.getMovieGenreNames();
  }

  getImage(): string {
    return this.imgUrl = environment.imageBaseUrl + this.movieInfo.poster_path;
  }

  getMovieGenreNames(): string[] {
    this.totalMovieGenreList.forEach(genre => {
      this.movieInfo.genre_ids.forEach(movieGenreId => {
        if (genre.id === movieGenreId) {
          this.genreNames.push(genre.name);
        }
      })
    })
   return this.displayGenreList = this.genreNames.splice(0,2);
  }

  navigateToMovieDetails(movie: MovieDetailsModel) {
    this.router.navigate(['details',movie.id]);
  }
}
