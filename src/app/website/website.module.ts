//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { MaterialModule } from '../material.module';

//components
import { WebsiteComponent } from './website.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    MenuComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule
  ]
})
export class WebsiteModule { }
