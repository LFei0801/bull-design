import { FC } from 'react';
import { MenuProps } from "./menu";
import { MenuItemProps } from "./menu-item";
import { SubMenuProps } from "./sub-menu";
export declare type IMenuComponentType = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponentType;
export default TransMenu;
