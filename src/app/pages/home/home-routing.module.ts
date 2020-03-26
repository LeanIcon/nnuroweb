import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './index1/index1.component';
// import { ComponentToLoad } from './dir/dir.component';


const routes: Routes = [
  { path: '', component: Index1Component },
  // { path: 'uri_page', component: ComponentToLoad },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
