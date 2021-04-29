import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent implements OnInit {

  @Input()
  movieReviews: any[];
  constructor() { }

  ngOnInit(): void {
  }


}
