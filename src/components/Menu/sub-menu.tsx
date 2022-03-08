/**
 * subMenu 属性
 * title : subMenu 标题
 * index :
 * className
 * style
 */
import React, {CSSProperties, FC, useContext, Children, FunctionComponentElement, useState} from "react";
import classnames from "classnames";
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menu-item";
import {Icon} from "../Icon/icon";
import { CSSTransition } from "react-transition-group"


export interface SubMenuProps {
  title : string
  index ?: string
  className ?: string
  style ?: CSSProperties
}

export const SubMenu:FC<SubMenuProps> = props => {
  const context = useContext(MenuContext)
  const { title, className, children, index, style} = props
  const openedMenus = context.defaultOpenedMenu as Array<string>
  const isOpened = (index && context.mode === "vertical") ? openedMenus.includes(index) : false
  const [open,setOpen] = useState(isOpened)

  const classes = classnames("menu-item",className,{
    "is-active" : context.index === index,
    "is-vertical" : context.mode === "vertical",
    "is-opened" : open
  })

  const renderChildren = () => {
    const classes = classnames("bull-sub-menu", {
      "is-open" : open
    })
    const childElements =  Children.map(children,(child,i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName === "menuItem") {
        return React.cloneElement(childElement, {index:`${i}-${index}`})
      }else{
        console.error("warning : Submenu has a child which not a MenuItem Component")
      }
    })
    return (
      <CSSTransition
        in={open}
        timeout={300}
        unmountOnExit
        onEntered={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <ul className={classes} >
          {childElements}
        </ul>
      </CSSTransition>
    )
  }

  const handleClick = () => {
    setOpen(!open)
  }

  let timer : any;
  const handleMouse = (e:React.MouseEvent,toggle : boolean) => {
    e.preventDefault()
    clearTimeout(timer)
    timer = setTimeout(() => {
      setOpen(toggle)
    },300)
  }

  const clickEvent = context.mode === "vertical" ? {
    onClick : handleClick
  } : {}

  const mouseEvent = context.mode === "horizontal" ? {
    onMouseEnter : (e:React.MouseEvent) => handleMouse(e, true),
    onMouseLeave : (e : React.MouseEvent) => handleMouse(e,false)
  } : {}

  return (
    <li
      className={classes}
      style={style}
      {...mouseEvent}
    >
      <div className={"sub-menu-title"} {...clickEvent}>
        {title}
        <Icon icon={"angle-down"} className={"arrow-icon"}/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = "subMenu"