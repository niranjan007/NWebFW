import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesPageData:string;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesPageData = this.servicesService.getServiceData();
  }

}
