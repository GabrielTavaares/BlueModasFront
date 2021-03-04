import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    RouterModule,
    MatBadgeModule
  ]
})
export class NavigationModule { }
