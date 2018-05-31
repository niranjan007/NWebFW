import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialPageData:string;

  constructor(private testimonialService:TestimonialsService) { }

  ngOnInit() {
    this.testimonialPageData = this.testimonialService.getTestimonialData();
  }

}
