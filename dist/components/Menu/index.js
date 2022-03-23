import { Menu } from "./menu";
import { MenuItem } from "./menu-item";
import { SubMenu } from "./sub-menu";
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
