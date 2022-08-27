import { Component } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems$ = this.menuItems.getListOfMenuItems();

  constructor(
    private menuItems: MenuItemService
  ) { }

}
