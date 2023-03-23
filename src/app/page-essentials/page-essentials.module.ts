import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule

  ]
})
export class PageEssentialsModule { }
