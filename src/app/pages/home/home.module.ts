import { PrivacyPolicyComponent } from './../privacy-policy/privacy-policy.component';
import { PostComponent } from './../post/post.component';
import { CovidComponent } from './../covid/covid.component';
import { NewsComponent } from './../news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidNewsService } from './../../services/covidNews.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { DescriptionComponent } from '../description/description.component';
import { PricingComponent } from '../pricing/pricing.component';
import { GetstartComponent } from '../getstart/getstart.component';
import { BlogComponent } from '../blog/blog.component';
import { FeatureComponent } from '../feature/feature.component';
import { ClientComponent } from '../client/client.component';
import { ContactComponent } from '../contact/contact.component';
import { TestiComponent } from '../testi/testi.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ParticlesModule } from 'angular-particle';

import { Index1Component } from './index1/index1.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
// import { ComponentToLoad } from './dir/dirfile.component';
import { ShopComponent } from '../shop/shop.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SubhomeComponent } from '../subhome/subhome.component';
import { WhychooseComponent } from '../subhome/whychoose/whychoose.component';
import { OurproductComponent } from '../ourproduct/ourproduct.component';


@NgModule({
  declarations: [
    Index1Component,
    ServicesComponent,
    AboutComponent,
    DescriptionComponent,
    PricingComponent,
    GetstartComponent,
    BlogComponent,
    ContactComponent,
    TestiComponent,
    ClientComponent,
    FeatureComponent,
    NewsComponent,
    CovidComponent,
    PostComponent,
    CovidComponent,
    PrivacyPolicyComponent,
    HomeAboutComponent,
    ShopComponent,
    SubhomeComponent, 
    WhychooseComponent,
    OurproductComponent
    // ComponentToLoad,
  ],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule.forRoot(),
    HomeRoutingModule,
    NgbModule.forRoot(),
    ParticlesModule,
    SlickCarouselModule,
  ]
})
export class HomeModule {}
