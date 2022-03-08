import {Menu} from "./components/Menu/menu";
import {MenuItem} from "./components/Menu/menu-item";
import {SubMenu} from "./components/Menu/sub-menu";

export default function App() {
  return (
    <>
      <Menu mode={"horizontal"}>
        <MenuItem>
          item 01
        </MenuItem>
        <MenuItem>
          item 02
        </MenuItem>
        <MenuItem>
          item 03
        </MenuItem>
        <SubMenu title={"drop down"}>
          <MenuItem>
            sub item 01
          </MenuItem>
          <MenuItem>
            sub item 02
          </MenuItem>
          <MenuItem>
            sub item 03
          </MenuItem>
        </SubMenu>
      </Menu>
    </>
  )
}