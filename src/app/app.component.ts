import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'API-Angular';
  AppServiceService: any;

  constructor(private appService: AppServiceService, private http: HttpClient) { }

  // ngOnit() {
  //   this.AppServiceService.getInfo(this.title).subscribe((data) => {
  //     console.log(data); 
  //   });
  // }
}
