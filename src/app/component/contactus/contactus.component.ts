import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../services/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusPageData:string;

  constructor(private contactusService:ContactusService) { }

  ngOnInit() {
    this.contactusPageData = this.contactusService.getContactusData();
  }

}
