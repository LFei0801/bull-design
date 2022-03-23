import { FC } from 'react'
import {Menu, MenuProps} from "./menu";
import {MenuItem, MenuItemProps} from "./menu-item";
import { SubMenu,SubMenuProps} from "./sub-menu";

export type IMenuComponentType = FC<MenuProps> & {
  Item : FC<MenuItemProps>
  SubMenu : FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponentType

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu


