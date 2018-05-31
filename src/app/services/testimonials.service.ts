import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  getTestimonialData():string{
    return "This is testimonial page and its being constructed by experts";
  }
}
