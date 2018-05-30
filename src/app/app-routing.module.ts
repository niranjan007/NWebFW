import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ServicesComponent } from './component/services/services.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactusComponent } from './component/contactus/contactus.component';

const routes:Routes = [

{ path: '', component:HomeComponent},
{ path: 'home', component:HomeComponent},
{ path: 'services',component:ServicesComponent},
{ path: 'testimonials',component:TestimonialsComponent},
{ path: 'contactus', component:ContactusComponent},
{ path: '**', component:ErrorComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
