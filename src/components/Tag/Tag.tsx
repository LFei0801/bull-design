/**
 * Tag
 */
import classnames from "classnames";
import React, {FC} from "react";
import {Icon} from "../Icon/icon";

export interface TagProps {
  type ?: "primary" | "warning" | "danger" | "info" | "default"
  closeable ?: boolean
  onCloseClick ?: () => void
}

export const Tag:FC<TagProps> = props => {
  const { closeable, type, onCloseClick ,children} = props
  const classes = classnames("bull-tag",{
    [`tag-${type}`] : type,
  })

  return (
    <div
      className={classes}
    >
      {children}
      {closeable && <Icon onClick={onCloseClick} className={"tag-close-icon"} icon={"times"}/>}
    </div>
  )
}

Tag.defaultProps = {
  type : "default",
  closeable : false
}
