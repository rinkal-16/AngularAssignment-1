import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SubComp1Component } from './sub-comp1/sub-comp1.component';
import { SubComp2Component } from './sub-comp2/sub-comp2.component';
import { SubComp3Component } from './sub-comp3/sub-comp3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppServiceService } from './app-service.service';
import { SubComp4Component } from './sub-comp4/sub-comp4.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



@NgModule({
  declarations: [
    AppComponent,
    SubComp1Component,
    SubComp2Component,
    SubComp3Component,
    SubComp4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
