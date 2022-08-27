export interface MenuItem {
  name: string,
  id: number,
  parentId: number | null
}

export interface MenuItemNode extends MenuItem {
  children: MenuItemNode[]
}
