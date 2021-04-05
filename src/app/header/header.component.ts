import { Component, OnInit } from '@angular/core';
import {Navigation} from "./navigation.model";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  navigations: Navigation[] = [
    {
      title: 'Home',
      type: 'url',
      url: '/',
      textColor: '#919191',
      textColorHover: 'white'
    },
    {
      title: '4K',
      type: 'url',
      url: '/',
      textColor: '#6AC045',
      icon: {
        name: '4k',
        type: 'mat-icon',
        color: '#6AC045'
      }
    },
    {
      title: 'Trending',
      type: 'url',
      url: '/',
      textColor: '#919191',
      textColorHover: 'white',
      icon: {
        name: 'leaderboard',
        type: 'mat-icon',
        color: 'white'
      }
    },
    {
      title: 'Browse Movies',
      type: 'url',
      url: '/',
      textColor: '#919191',
      textColorHover: 'white',
      icon: {
        name: 'list_alt',
        type: 'mat-icon',
        color: 'white'
      }
    },
    {
      title: 'Login',
      type: 'action',
      textColor: 'white',
      textColorHover: '#919191',
      action: this.login
    },
    {
      title: 'Register',
      type: 'action',
      textColor: 'white',
      textColorHover: '#919191',
      action: this.register,
      icon: {
        name: 'person',
        type: 'mat-icon',
        color: 'white'
      }
    }
  ]

  login() : void {
    console.log("login clicked");
  }

  register() : void {
    console.log("register clicked");
  }

}
