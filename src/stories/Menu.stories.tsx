import {Menu, MenuProps} from "../components/Menu/menu";
import {SubMenu} from "../components/Menu/sub-menu";
import {MenuItem} from "../components/Menu/menu-item";
import { ComponentMeta } from "@storybook/react"

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Horizontal = (args:MenuProps) => (
  <Menu
    defaultIndex={'0'}
    onSelect={i => console.log(i)}
    {...args}
  >
    <MenuItem>
      cool link1
    </MenuItem>
    <MenuItem disabled={true}>
      cool link2
    </MenuItem>
    <SubMenu title="下拉菜单">
      <MenuItem>
        cool link3
      </MenuItem>
      <MenuItem>
        cool link3
      </MenuItem>
      <MenuItem>
        cool link3
      </MenuItem>
    </SubMenu>
    <MenuItem>
      cool link3
    </MenuItem>
  </Menu>
)

export const Vertical = (args:MenuProps) => (
  <Menu
    defaultIndex={'0'}
    onSelect={i => console.log(i)}
    mode="vertical"
  >
    <MenuItem>
      cool link1
    </MenuItem>
    <MenuItem disabled={true}>
      cool link2
    </MenuItem>
    <SubMenu title="下拉菜单">
      <MenuItem>
        cool link3
      </MenuItem>
      <MenuItem>
        cool link3
      </MenuItem>
      <MenuItem>
        cool link3
      </MenuItem>
    </SubMenu>
    <MenuItem>
      cool link3
    </MenuItem>
  </Menu>
)