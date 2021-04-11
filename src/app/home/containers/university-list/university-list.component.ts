import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";
import {UniversityDataService} from "../../../services/university-data.service";

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  uniList: any[] = []
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
    });
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
