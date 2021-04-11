import {Component, Input, OnInit} from '@angular/core';
import {UniversityDataModel} from "../../models/university-data.model";

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  @Input()
  universityInfo: UniversityDataModel
  constructor() { }

  ngOnInit(): void {
  }

}
