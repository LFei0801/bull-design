import {Menu} from "./components/Menu/menu";
import {MenuItem} from "./components/Menu/menu-item";

export default function App() {
  return (
    <>
      <Menu
        onSelect={(index) => console.log(index)}
        mode={"vertical"}
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
      </Menu>
    </>
  )
}