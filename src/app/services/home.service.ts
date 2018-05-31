import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Home } from '../Models/Home'


@Injectable({
  providedIn: 'root'
})

export class HomeService {


  home:Observable<Home[]>

  constructor(private httpClient:HttpClient) { }

  getHomeData():string {
     return "Welcome to home page";
  }

  getRequest():Observable<Home[]>{
    return this.httpClient.get<Home[]>('http://localhost:8080/home');
  }

}
