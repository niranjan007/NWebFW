import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getServiceData():string{
    return "Welcome to services page, Page is under construction";
  }
}
