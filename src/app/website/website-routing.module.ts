import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WebsiteRoutingModule { }
