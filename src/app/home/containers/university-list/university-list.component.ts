import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";
import {UniversityDataService} from "../../../services/university-data.service";
import {UniversityDataModel} from "../../models/university-data.model";

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  uniList: UniversityDataModel[] = []
  popularUnilist: UniversityDataModel[] = []
  latestUnilist: UniversityDataModel[] = []
  upcomingUnilist: UniversityDataModel[] = []

  constructor( private http: HttpClient,
               private firebaseDB: AngularFireDatabase,
               private uniDataService: UniversityDataService) { }

  ngOnInit(): void {
    this.fetchUniData(12)
  }

  fetchUniData(count: number): void {
     this.uniDataService.getUniversityData(count).then(response => {
      console.log(response.val())
       this.uniList = Object.keys(response.val()).map(index => {
         let uni = response.val()[index];
         return uni
       })
       this.spliceUniList();
    });
  }

  spliceUniList(): void {
    let list = this.uniList;
    let chunks = [], i = 0, n = list.length;
    while (i < n) {
      chunks.push(list.slice(i, i += 4));
    }
    this.popularUnilist = chunks[0];
    this.latestUnilist = chunks[1];
    this.upcomingUnilist = chunks[2];
  }

  // populateData() {
  //   this.http.get('http://universities.hipolabs.com/search?country=Bangladesh').subscribe(response => {
  //     const unis = response;
  //     this.uniList = unis;
  //     // this.uniList.forEach((uni) => {
  //     //   uni.image = ''
  //     // })
  //     console.log(this.uniList)
  //   });
  //
  //   this.uniList.forEach(uni => {
  //     this.firebaseDB.list('universities').push(uni);
  //   });
  // }
}