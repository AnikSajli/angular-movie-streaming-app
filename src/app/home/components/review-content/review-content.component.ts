import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-content',
  templateUrl: './review-content.component.html',
  styleUrls: ['./review-content.component.scss']
})
export class ReviewContentComponent implements OnInit {
  @Input()
  review: any;
  isReadMore = true;
  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }
}
