import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import firebase from "firebase";
import {Observable} from "rxjs";
import {UniversityDataModel} from "../home/models/university-data.model";

@Injectable({
  providedIn: 'root'
})
export class UniversityDataService {

  constructor( ) { }

  getUniversityData(count: number): Promise<firebase.database.DataSnapshot> {
    const ref = firebase.database().ref('universities');
    return ref.orderByKey().limitToFirst(count).once("value");
  }
}
