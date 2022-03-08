/**
 * tabs-item 组件属性
 * className
 * style
 * label 标签标题，作用与li标签上
 * disabled 禁止此项标签被点击
 */
import {CSSProperties, FC} from "react";
import classnames from "classnames";

export interface TabsItemProps {
  style ?: CSSProperties
  className ?: string
  label : string
  disabled ?: boolean
  isActive ?: boolean
}

export const TabItem:FC<TabsItemProps> = props => {
  const { style, label, children,isActive, className} = props
  const classes = classnames("tabs-content",className,{
    "tabs-content-active" : isActive,
  })
  return (
    <div key={label} className={classes} style={style}>
      {children}
    </div>
  )
}

TabItem.displayName = "tabItem"

TabItem.defaultProps = {
  disabled : false
}