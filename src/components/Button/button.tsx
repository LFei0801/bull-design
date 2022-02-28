import {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from "react";
import classnames from 'classnames'

type NativeButtonAndLinkProps = Partial<ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>>

export interface ButtonProps extends NativeButtonAndLinkProps{
  size ?: "lg" | "sm"
  btnType ?: "default" | "primary" | "danger" | "warning" | "info" | "link"
  href ?: string
  disabled ?: boolean
}

export const Button:FC<ButtonProps> = props => {
  const { disabled, btnType, size, href, children, className, ...resetProps} = props
  const classes = classnames("btn",className,{
    [`btn-${btnType}`] : btnType,
    [`btn-${size}`] : size,
    [`disabled`] : btnType === "link" && disabled
  })

  if(btnType === "link" && href) {
    return <a
      className={classes}
      href={href}
      {...resetProps}
    >
      {children}
    </a>
  }

  return <button
    className={classes}
    disabled={disabled}
    {...resetProps}
  >
    {children}
  </button>
}

Button.defaultProps = {
  btnType : "default",
}