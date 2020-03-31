import { CovidNewsComponent } from './covid-news/covid-news.component';
import { CovidComponent } from './covid/covid.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'covid-news', component: CovidNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
