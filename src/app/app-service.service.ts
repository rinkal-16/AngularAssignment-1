import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  [x: string]: any;

  //Here no need to write appService: AppServiceService beacasue already we export Service class as above. 
  constructor(private http: HttpClient) { }

  

  public getInfo() {
    return this.http.get("https://localhost:5001/api/Info");
  }

  public postInfo() { 
    return this.http.post("https://localhost:5001/api/Info", {id:1, name:'rinkal'});
  }  

  public deleteinfo() {
    return this.http.delete("https://localhost:5001/api/Info");
  }

}
