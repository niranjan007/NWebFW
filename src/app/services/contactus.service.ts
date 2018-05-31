import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }

  getContactusData():string{
    return "Niranjana Murthy, 0479281010, niranjanamurthy@gmail.com";
  }
}
