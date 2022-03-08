/**
 * tabs标签卡属性
 * className
 * style
 * onSelect 选择标签回调事件
 * defaultIndex 默认打开标签序号
 * mode : line | card
 */
import React, { CSSProperties, FC, FunctionComponentElement, useState } from "react";
import classnames from "classnames"
import {TabsItemProps} from "./tabs-item";

export interface TabsProps {
  className ?: string
  style ?: CSSProperties
  onSelect ?: (selectIndex : number) => void
  defaultIndex ?: number
  mode ?: "line" | "card"
}

export const Tabs:FC<TabsProps> = props => {
  const { defaultIndex, style, onSelect, mode, className, children} = props
  const [currentIndex,setCurrentIndex] = useState<number | undefined>(defaultIndex)
  const classes = classnames("tabs-nav",className,{
    "tabs-line" : mode === "line",
    "tabs-card" : mode === "card"
  })

  const handleClick = (index : number,disabled : boolean = false) => {
    if(!disabled) {
      setCurrentIndex(index)
      if(onSelect) {
        onSelect(index)
      }
    }
  }

  // 渲染标签 ， 由li标签组成
  const renderTabItemLabel = () => React.Children.map(children,(child,index) => {
    const childElement = child as FunctionComponentElement<TabsItemProps>
    const itemLabelCLasses = classnames("tabs-label",{
      "tabs-label-disabled" : childElement.props.disabled,
      "tabs-label-active" : currentIndex === index
    })
    if(childElement.type.displayName === "tabItem") {
      return (
        <li
          className={itemLabelCLasses}
          onClick={() => handleClick(index,childElement.props.disabled)}
        >
          {childElement.props.label}
        </li>
      )
    }else {
      console.error("Warning: tabs has a child Which is not a TabItem")
    }
  })

  // 渲染内容
  const renderItemContent = () => React.Children.map(children,(child,index) => {
    const childElement = child as FunctionComponentElement<TabsItemProps>
    if(childElement.type.displayName === "tabItem") {
      return React.cloneElement(childElement,{
        isActive : currentIndex === index
      })
    }else{
      console.error("Warning: tabs has a child Which is not a TabItem")
    }
  })
  return (
    <nav className={classes} style={style} data-testid={"test"}>
      <ul className={"tabs-ul"}>
        {renderTabItemLabel()}
      </ul>
      {
        renderItemContent()
      }
    </nav>
  )
}

Tabs.defaultProps = {
  mode : "line",
  defaultIndex : 0
}
