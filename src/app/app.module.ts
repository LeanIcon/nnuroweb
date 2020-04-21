import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './pages/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//import { ProductpageComponent } from './productpage/productpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgetComponent,
    //ProductpageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
