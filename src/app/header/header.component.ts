import { Component, OnInit } from '@angular/core';
import {Navigation} from "./navigation.model";
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../login-modal/login-modal.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  navigations: Navigation[];
  email: string;
  isLoggedIn: boolean;

  constructor( public dialog: MatDialog ) {
  }

  ngOnInit(): void {
    this.initNavigation(this.isLoggedIn);
  }

  initNavigation(isLoggedIn): void {
    this.navigations = [
      {
        title: 'Home',
        type: 'url',
        textColorHover: 'white',
        url: '/'
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
        },
      },
      {
        title: 'Trending',
        type: 'url',
        url: '/',
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
        textColorHover: 'white',
        icon: {
          name: 'list_alt',
          type: 'mat-icon',
          color: 'white'
        }
      },
    ];

    if (!this.isLoggedIn) {
     this.navigations.push(
       {
         title: 'Login',
         type: 'action',
         textColor: 'white',
         textColorHover: '#919191',
         action: this.login.bind(this)
       },
       {
         title: 'Register',
         type: 'action',
         textColor: 'white',
         textColorHover: '#919191',
         action: this.register.bind(this),
         icon: {
           name: 'person',
           type: 'mat-icon',
           color: 'white'
         }
       }
     ) ;
    }
  }

  login() : void {
    const dialogRef = this.dialog.open(LoginModalComponent,
      {
        data: true
      });
    dialogRef.afterClosed().subscribe(result => {
      this.isLoggedIn = result.isLoggedIn;
      this.email = result.email;
      this.initNavigation(this.isLoggedIn);
    });
  }

  register() : void {
    const dialogRef = this.dialog.open(LoginModalComponent,
      {
        data: false
      });
    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }


  onNavHovered(spanRef: HTMLSpanElement, nav: Navigation) {
    spanRef.style.color = nav?.textColorHover;
  }

  onNavMouseOut(spanRef: HTMLSpanElement, nav: Navigation) {
    spanRef.style.color = nav?.textColor || 'unset';
  }
}
