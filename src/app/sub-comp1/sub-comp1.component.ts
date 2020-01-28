import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-sub-comp1',
  templateUrl: './sub-comp1.component.html',
  styleUrls: ['./sub-comp1.component.sass']
})
export class SubComp1Component implements OnInit {
  
  public user = [];
  

  constructor(
    //call the constructor
    private appService: AppServiceService
  ) { }

  //Here we use getInfo method from service file. 
  ngOnInit() {
      this.appService.getInfo().subscribe((data) => {
        console.log(data);
        return this.user = data;
      })

      this.appService.postInfo().subscribe((data) => {
        console.log(data);
      })
  }  

}



