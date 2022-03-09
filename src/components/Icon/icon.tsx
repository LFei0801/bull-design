import { FontAwesomeIcon,FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import {FC} from "react";
import classnames from "classnames";

export interface IconProps extends FontAwesomeIconProps {
  /**
   * icon类型
   */
  theme ?: "primary" | "warning" | "info" | "danger" | "secondary" | "light" | "dark" | "success"
}


export const Icon:FC<IconProps> = ({theme,className,...restProps}) => {
  const classes = classnames("bull-icon",className,{
    [`icon-${theme}`] : theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}