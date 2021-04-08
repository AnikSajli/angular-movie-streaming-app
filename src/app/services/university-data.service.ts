import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UniversityDataService {

  constructor( ) { }

  getUniversityData(count: number): any {
    const ref = firebase.database().ref('universities');
    return ref.orderByKey().limitToFirst(count).once("value");
  }
}
