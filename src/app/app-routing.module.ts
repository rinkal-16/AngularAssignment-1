import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubComp1Component } from './sub-comp1/sub-comp1.component';
import { SubComp2Component } from './sub-comp2/sub-comp2.component';
import { SubComp3Component } from './sub-comp3/sub-comp3.component';
import { SubComp4Component } from './sub-comp4/sub-comp4.component';

const routes: Routes = [
  { path: 'sub-comp1', component: SubComp1Component },
  { path: 'sub-comp2', component: SubComp2Component },
  { path: 'sub-comp3', component: SubComp3Component },
  { path: 'sub-comp4', component: SubComp4Component },
  { path: '', redirectTo: '', pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

