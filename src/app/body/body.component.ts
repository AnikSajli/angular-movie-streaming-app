import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  uniList: any;
  constructor( private http: HttpClient,
               private firebaseDB: AngularFireDatabase) { }

  ngOnInit(): void {
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
