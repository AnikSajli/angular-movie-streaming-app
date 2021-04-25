import {Component, Input, OnInit} from '@angular/core';
import {MovieQueryService} from "../../../services/movie-query.service";
import {MovieDetailsModel, MovieGenreModel} from "../../models/movie-data.model";

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
  defaultImage = "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-600w-99335579.jpg";
  constructor(private movieQueryService: MovieQueryService) { }

  ngOnInit(): void {
    //this.getImage();
    console.log(this.movieInfo);
    console.log(this.totalMovieGenreList);
    this.getMovieGenreNames();
  }

  getImage(): void {
    this.movieQueryService.fetchMovieImage(this.movieInfo.poster_path)
      .subscribe(res => {
        console.log(res)
      });
  }

  getMovieGenreNames(): void {
    this.totalMovieGenreList.forEach(genre => {
      this.movieInfo.genre_ids.forEach(movieGenreId => {
        if (genre.id === movieGenreId) {
          this.genreNames.push(genre.name);
        }
      })
    })
   this.displayGenreList = this.genreNames.splice(0,2);
  }
}
