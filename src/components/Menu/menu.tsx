/**
 * Menu组件的属性
 * defaultIndex ?: 默认高亮显示的菜单项
 * className ?:
 * style ?:
 * onSelect ?: 菜单项被点击事件
 * mode ?: 横向还是纵向菜单
 */
import React, {CSSProperties, FC , createContext, useState} from "react";
import classnames from "classnames";
import {MenuItemProps} from "./menu-item";

export interface MenuProps {
  defaultIndex ?: number
  className ?: string
  style ?: CSSProperties
  mode ?: "horizon" | "vertical"
  onSelect ?: (selectIndex : number) => void
}

// TODO 完成SubMenu组件，添加单元测试
export const MenuContext = createContext<{
  index : number,
  onSelect ?: (selectIndex : number) => void
}>({index : 0})

export const Menu:FC<MenuProps> = props => {
  const {defaultIndex, style, onSelect, mode, className, children} = props
  const [currentActive, setActive] = useState<number | undefined>(defaultIndex)
  const classes = classnames("bull-menu", className, {
    "menu-vertical": mode === "vertical"
  })

  const handleSelect = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const renderChildren = () => {
    // 遍历Children元素
    // 如果children元素是MenuItem 就渲染，否则就输出一个Warning
    return React.Children.map(children,(child,index) => {
      const childELe = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childELe.type
      if(displayName === "menuItem") {
        // 默认传入index给子元素，不需要显示传入index
        return React.cloneElement(childELe, { index })
      }else{
        console.error("warning : menu has a child which not a MenuItem Component")
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={{
        index : currentActive ? currentActive : 0,
        onSelect : handleSelect
      }}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex : 0,
  mode : "horizon"
}