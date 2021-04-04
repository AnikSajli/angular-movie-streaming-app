import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigationConfig = [
    {
      content: 'Home',
      type: 'action',
      color: 'red',
      hoverColor: '#ffffff'
    },
    {
      content: '4k',
      type: 'action',
      color: '#919191',
      hoverColor: '#ffffff'
    },
    {
      content: 'Trending',
      type: 'action',
      color: '#919191',
      hoverColor: '#ffffff'
    },
    {
      content: 'Browse Movies',
      type: 'action',
      color: '#919191',
      hoverColor: '#ffffff'
    },
    {
      content: 'Login',
      type: 'action',
      color: 'color: #fff !important',
      hoverColor: '#ffffff'
    },
    {
      content: 'Register',
      type: 'action',
      color: '#919191',
      hoverColor: '#ffffff'
    },
  ]

}
