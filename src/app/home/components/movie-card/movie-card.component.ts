import {Component, Input, OnInit} from '@angular/core';
import {UniversityDataModel} from "../../models/university-data.model";

@Component({
  selector: 'app-university-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movieInfo: any
  defaultImage = "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-600w-99335579.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
