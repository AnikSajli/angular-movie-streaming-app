import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniversityListComponent} from "./containers/university-list/university-list.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { UniversityCardComponent } from './components/university-card/university-card.component';


@NgModule({
  declarations: [
    UniversityListComponent,
    UniversityCardComponent,
  ],
  exports: [
    UniversityListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: UniversityListComponent
      }
    ])
  ]
})
export class HomeModule { }
