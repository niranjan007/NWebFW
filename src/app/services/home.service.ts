import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() { }

  getHomeData():string {
     return "Welcome to home page";
  }

}
