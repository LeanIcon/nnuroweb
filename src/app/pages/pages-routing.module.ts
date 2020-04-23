import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CovidComponent } from './covid/covid.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { FormpageComponent } from './formpage/formpage.component';
import { NnurohrComponent } from './nnurohr/nnurohr.component';
import { NnuroinsuranceComponent } from './nnuroinsurance/nnuroinsurance.component';
import { NnuropharmaComponent } from './nnuropharma/nnuropharma.component';

import { NnurohospitalsComponent } from './nnurohospitals/nnurohospitals.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'ourproduct', component: OurproductComponent },
  { path: 'nnurohr', component: NnurohrComponent },
  { path: 'nnuroinsurance', component: NnuroinsuranceComponent },
  { path: 'nnuropharma', component: NnuropharmaComponent },
  { path: 'nnurohospitals', component: NnurohospitalsComponent },
  { path: 'formpage', component: FormpageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
