import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";
import {UniversityDataService} from "../../../services/university-data.service";
import {UniversityDataModel} from "../../models/university-data.model";
import {MovieQueryService} from "../../../services/movie-query.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-university-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  uniList: UniversityDataModel[] = []
  popularMovielist: UniversityDataModel[] = []
  latestMovielist: UniversityDataModel[] = []
  upcomingMovielist: UniversityDataModel[] = []

  constructor( private http: HttpClient,
               private firebaseDB: AngularFireDatabase,
               private uniDataService: UniversityDataService,
               private movieQueryService: MovieQueryService,
               private router: Router) { }

  ngOnInit(): void {
    // this.fetchUniData(12)
    this.getTopRatedMovies();
    this.getLatestMovies();
    this.getUpcomingMovies();
  }

  // fetchUniData(count: number): void {
  //    this.uniDataService.getUniversityData(count).then(response => {
  //     console.log(response.val())
  //      this.uniList = Object.keys(response.val()).map(index => {
  //        let uni = response.val()[index];
  //        return uni
  //      })
  //      this.spliceUniList();
  //   });
  // }

  getTopRatedMovies(): void {
    this.movieQueryService.fetchTopRatedMovieList().subscribe(data => {
      this.popularMovielist = data.results.splice(0,4);
      console.log(this.popularMovielist);
    });
  }

  getLatestMovies(): void {
    this.movieQueryService.fetchLatestMovieList().subscribe(data => {
      this.latestMovielist = [data];
    });
  }

  getUpcomingMovies(): void {
    this.movieQueryService.fetchUpcomingMovieList().subscribe(data => {
      this.upcomingMovielist = data.results.splice(0,4);
    });
  }

  spliceUniList(): void {
    let list = this.uniList;
    let chunks = [], i = 0, n = list.length;
    while (i < n) {
      chunks.push(list.slice(i, i += 4));
    }
    this.popularMovielist = chunks[0];
    this.latestMovielist = chunks[1];
    this.upcomingMovielist = chunks[2];
  }

  // populateData() {
  //   this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1').subscribe(response => {
  //     const unis = response;
  //     console.log(response);
  //     debugger
  //     // this.uniList = unis;
  //     // this.uniList.forEach((uni) => {
  //     //   uni.image = ''
  //     // })
  //     // console.log(this.uniList)
  //   });
  //
  //   // this.uniList.forEach(uni => {
  //   //   this.firebaseDB.list('universities').push(uni);
  //   // });
  // }

  navigateToMovieDetails(movie: any) {
    this.router.navigate(['details',movie.id]);
  }
}
