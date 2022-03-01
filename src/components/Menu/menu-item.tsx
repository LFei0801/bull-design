/**
 * MenuItem组件属性
 * disabled ?: 禁用此菜单项
 * index : 菜单项标号
 * className
 * style
 */
import {CSSProperties, FC, useContext} from "react";
import classnames from "classnames"
import { MenuContext } from './menu'

export interface MenuItemProps {
  index ?: number
  disabled ?: boolean
  className ?: string
  style ?: CSSProperties
}

export const MenuItem:FC<MenuItemProps> = props => {
  const { index, className, style, disabled, children} = props
  const context = useContext(MenuContext)
  const classes = classnames("menu-item",className, {
    "is-disabled" : disabled,
    "is-active" : context.index === index
  })

  const handleClick = () => {
    if(context.onSelect && !disabled && index !== undefined) {
      context.onSelect(index)
    }
  }

  return (
    <li
      style={style}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </li>
  )
}

MenuItem.displayName = "menuItem"