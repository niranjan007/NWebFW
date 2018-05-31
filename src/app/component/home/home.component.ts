import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscriber } from 'rxjs';
import { Home } from '../../Models/Home'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePageData:string;
  homes:Home[];

  constructor(private homeService:HomeService) { }

  ngOnInit() {

    this.homePageData = this.homeService.getHomeData();
    this.showRecievedDataFromHttp();
  }

  showRecievedDataFromHttp(){
     this.homeService.getRequest().subscribe(data => this.homes = data );
  }
}

