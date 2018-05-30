import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { ErrorComponent } from './component/error/error.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactusComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
