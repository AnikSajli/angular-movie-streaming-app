import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniversityListComponent} from "./containers/university-list/university-list.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    UniversityListComponent,
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
