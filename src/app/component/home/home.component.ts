import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homePageData:string;

  constructor(private homeService:HomeService) { }

  ngOnInit() {

    this.homePageData = this.homeService.getHomeData();
  }

}
