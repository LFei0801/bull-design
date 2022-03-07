import {cleanup, fireEvent, render, RenderResult, waitFor} from '@testing-library/react'
import {Menu,MenuProps} from "./menu";
import {MenuItem} from "./menu-item";
import {SubMenu} from "./sub-menu";

const defaultProps:MenuProps = {
  defaultIndex : "0",
  className : "test",
  onSelect : jest.fn(),
}

const verticalProps : MenuProps = {
  mode : "vertical",
  onSelect : jest.fn()
}


const generateMenuElement = (props:MenuProps) => {
  return (
    <Menu
      {...props}
    >
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        third
      </MenuItem>
      <SubMenu title={"subMenu"} >
        <MenuItem>
          drop 1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}

const createCssFile = () => {
  const cssFile = `
    .bull-sub-menu {
      display : none;
    }
    .bull-sub-menu.is-open {
      display : block;
    }
  `
  const style = document.createElement("style")
  style.type = "text/css"
  style.innerHTML = cssFile
  return style
}

let screen : RenderResult,
  menuElement : HTMLElement,
  activeElement : HTMLElement,
  disabledElement : HTMLElement


describe("test Menu and MenuItem Component",() => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    screen = render(generateMenuElement(defaultProps))
    screen.container.appendChild(createCssFile())
    menuElement = screen.getByTestId("test-menu")
    activeElement = screen.getByText("active")
    disabledElement = screen.getByText("disabled")
  })
  it("should render correct Menu and MenuItem base on  default props",() => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass("bull-menu test")
    // 选择ul直属的li，不抓取li中包含的li
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4)

    expect(activeElement).toBeInTheDocument()
    expect(activeElement).toHaveClass("menu-item is-active")

    expect(disabledElement).toBeInTheDocument()
    expect(disabledElement).toHaveClass("menu-item is-disabled")

  })
  it("click item should change active and call the right callback",() => {
    const thirdItem = screen.getByText("third")
    fireEvent.click(thirdItem)
    expect(activeElement).not.toHaveClass("is-active")
    expect(thirdItem).toHaveClass("is-active")
    expect(defaultProps.onSelect).toHaveBeenCalledWith("2")

    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass("is-active")
    expect(defaultProps.onSelect).not.toHaveBeenCalledWith("1")
  })
  it("should render correct vertical Menu base on vertical props",() => {
    cleanup()
    const view = render(generateMenuElement(verticalProps))
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const menuELe = view.getByTestId("test-menu")
    expect(menuELe).toHaveClass("bull-menu menu-vertical")
  })
  it("should show dropdown when hover on subMenu",async () => {
    expect(screen.queryByText("drop 1")).not.toBeVisible()
    const subMenuElement = screen.getByText("subMenu")
    fireEvent.mouseEnter(subMenuElement)
    await waitFor(() => {
      expect(screen.queryByText("drop 1")).toBeVisible()
    })
    fireEvent.mouseLeave(subMenuElement)
    await waitFor(() => {
      expect(screen.queryByText("drop 1")).not.toBeVisible()
    })
  })
  it("should show dropdown when click on subMenu and menu mode is vertical", async () => {
    cleanup()
    const view = render(generateMenuElement(verticalProps))
    // eslint-disable-next-line testing-library/no-container
    view.container.appendChild(createCssFile())
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(view.queryByText("drop 1")).not.toBeVisible()
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const subMenu = view.getByText("subMenu")
    fireEvent.click(subMenu)
    await waitFor(() => {
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(view.queryByText("drop 1")).toBeVisible()
    })
  })
})