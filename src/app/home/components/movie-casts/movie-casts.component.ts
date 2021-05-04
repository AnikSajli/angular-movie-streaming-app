import {Component, Input, OnInit} from '@angular/core';
import {MovieCast} from "../../models/movie-data.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-movie-casts',
  templateUrl: './movie-casts.component.html',
  styleUrls: ['./movie-casts.component.scss']
})
export class MovieCastsComponent implements OnInit {

  @Input()
  cast: MovieCast[]
  castInfoList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getDisplayCastArray();
  }

  getDisplayCastArray(): void {
    this.cast.forEach(c => {
      let tempCast = {
        name: c.original_name,
        character: c.character,
        image: environment.imageBaseUrl + c.profile_path
      }
      this.castInfoList.push(tempCast)
    })
    this.castInfoList = this.castInfoList.splice(0,4);
    console.log(this.castInfoList)
  }

}
