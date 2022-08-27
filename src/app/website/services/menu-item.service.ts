import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuItem, MenuItemNode } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private host = environment.host;
  private getMenuItems = "endpoint del listado de items para menu";

  constructor(
    private http: HttpClient
  ) { }

  getListOfMenuItems(): Observable<MenuItemNode[]> {
    //en caso de obtener desde una API
    // return this.http.get<MenuItem[]>(`${this.host + this.getMenuItems}`);
    //obteniendo los datos de un .json
    return this.http.get<MenuItem[]>(`./assets/menu-list-item.response.json`).pipe(
      map( data => {return this.createNodeTree(data);})
    );
  }

  //https://www.tutorialspoint.com/build-tree-array-from-flat-array-in-javascript
  //https://www.codegrepper.com/code-examples/javascript/how+to+build+tree+array+from+flat+array+in+javascript
  createNodeTree(menuItems: MenuItem[]): MenuItemNode[] {
    const menuItemNodes: MenuItemNode[] = [];
    menuItems.forEach(menuItem => {
      menuItemNodes[menuItem.id] = { ...menuItem, children: []};
    })
    const menuItemsTree: MenuItemNode[] = [];
    menuItems.forEach(menuItem => {
      if(menuItem.parentId){
        menuItemNodes[menuItem.parentId].children.push(menuItemNodes[menuItem.id])
      } else {
        menuItemsTree.push(menuItemNodes[menuItem.id])
      }
    })

    return menuItemsTree;
  }
}
