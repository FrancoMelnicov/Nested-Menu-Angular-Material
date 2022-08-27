import { Component, Input, ViewChild } from '@angular/core';

//models
import { MenuItemNode } from '../../models/menu-item.model';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent {

  @Input() subItems: MenuItemNode[] = [];
  @ViewChild('childMenu', {static: true}) public childMenu: any;

  constructor() { }
}
