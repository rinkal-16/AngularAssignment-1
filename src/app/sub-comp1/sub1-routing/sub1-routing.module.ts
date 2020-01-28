import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

const routes: Routes = [
  { path: '/home', component: AppComponent},
  { path: '', redirectTo: '/home', pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Sub1RoutingModule { }
