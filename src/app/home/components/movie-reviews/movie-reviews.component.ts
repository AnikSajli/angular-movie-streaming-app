import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent implements OnInit {

  @Input()
  movieReviews: any[];
  // throttle = 300;
  // scrollDistance = 1;
  // scrollUpDistance = 2;
  constructor() { }

  ngOnInit(): void {
  }


  onScrollDown() {
    console.log("scrolled down")
  }

  onUp() {
    console.log("scrolled up")
  }
}
