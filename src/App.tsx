import {Menu} from "./components/Menu/menu";
import {MenuItem} from "./components/Menu/menu-item";
import {SubMenu} from "./components/Menu/sub-menu";

export default function App() {
  return (
    <>
      <Menu
        onSelect={(index) => console.log(index)}
        mode={"horizontal"}
        defaultOpenedMenu={["3"]}
      >
        <MenuItem>
          first menu item
        </MenuItem>
        <MenuItem disabled>
          second menu item
        </MenuItem>
        <MenuItem>
          third menu item
        </MenuItem>
        <SubMenu title={"subMenu"} >
          <MenuItem>
            first sub menu item
          </MenuItem>
          <MenuItem>
            second sub menu item
          </MenuItem>
        </SubMenu>
      </Menu>
    </>
  )
}