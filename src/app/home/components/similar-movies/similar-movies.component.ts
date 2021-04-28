import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {

  @Input()
  similarMoviesImgURLs: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
