/**
 * Menu组件的属性
 * defaultIndex ?: 默认高亮显示的菜单项
 * className ?:
 * style ?:
 * onSelect ?: 菜单项被点击事件
 * mode ?: 横向还是纵向菜单
 * defaultOpenedMenu : 默认打开子菜单，应该是垂直菜单才有
 */
import React, {CSSProperties, FC , createContext, useState} from "react";
import classnames from "classnames";
import {MenuItemProps} from "./menu-item";

export interface MenuProps {
  defaultIndex ?: string
  className ?: string
  style ?: CSSProperties
  mode ?: "horizontal" | "vertical"
  onSelect ?: (selectIndex : string) => void
  defaultOpenedMenu ?: string[]
}

export const MenuContext = createContext<{
  index : string,
  onSelect ?: (selectIndex : string) => void
  mode ?: "horizontal" | "vertical"
  defaultOpenedMenu ?: string[]
}>({index : "0"})

export const Menu:FC<MenuProps> = props => {
  const {defaultIndex, style, onSelect, mode, className, children,defaultOpenedMenu} = props
  const [currentActive, setActive] = useState<string | undefined>(defaultIndex)
  const classes = classnames("bull-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal" : mode === "horizontal"
  })

  const handleSelect = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const renderChildren = () => {
    // 遍历Children元素
    // 如果children元素是MenuItem 或者 SubMenu 就渲染，否则就输出一个Warning
    return React.Children.map(children,(child,index) => {
      const childELe = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childELe.type
      if(displayName === "menuItem" || displayName === "subMenu") {
        // 默认传入index给子元素，不需要显示传入index
        return React.cloneElement(childELe, {index : `${index}`})
      }else{
        console.error("warning : menu has a child which not a MenuItem Component")
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid={"test-menu"}>
      <MenuContext.Provider value={{
        index : currentActive ? currentActive : "0",
        onSelect : handleSelect,
        mode,
        defaultOpenedMenu
      }}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex : "0",
  mode : "horizontal",
  defaultOpenedMenu : []
}