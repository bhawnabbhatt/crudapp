import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ Http,HttpModule,Response } from '@angular/http';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
//import { CarouselModule } from 'angular4-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
//import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CrudService } from './crud.service';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './users/edit/edit.component';
import { ViewComponent } from './users/view/view.component';
import { NotFoundComponent } from './users/not-found/not-found.component';



const r:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"register",component:RegisterComponent},
  {path:"users",component:UsersComponent,pathMatch: 'prefix',children:[
    {path:"view/:id",component:ViewComponent},
    {path:"edit/:id",component:EditComponent}
  ]},
 
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    EditComponent,
    ViewComponent,
    NotFoundComponent
  ],
  imports: [
   BrowserModule,
  FormsModule,
  ReactiveFormsModule,
 
  HttpModule,
  RouterModule.forRoot(r),
 CarouselModule.forRoot()
 


  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
