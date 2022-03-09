/**
 * 分析Alert组件需要的属性
 * title ?: 标题
 * children : 内容
 * visible : 控制Alert组件是否显示
 * type ?: alert类型，不同的类型有不同的背景颜色
 * onClose ?: 关闭按钮的回调事件
 * closeable ?: 是否显示关闭按钮
 */
import {FC, ReactNode} from "react";
import classnames from "classnames";
import {Icon} from "../Icon/icon";
import {Transition} from "../Transition/transition";

export interface AlertProps {
  /**
   * 控制是否显示组件
   * true 显示组件
   * false 不显示组件
   */
  visible : boolean
  /**
   * 是否显示关闭按钮
   */
  closeable ?: boolean
  /**
   * 点击关闭按钮时，触发的回调函数
   */
  onClose ?: () => void
  /**
   * Alert的标题，一般用于醒目的提示信息
   */
  title ?: string
  /**
   * Alert组件内部的内容
   */
  children ?: ReactNode
  /**
   * Alert的类型
   */
  type ?: "primary" | "info" | "danger" | "warning"
  /**
   * 自定义的class类名
   */
  className ?: string
}

export const Alert:FC<AlertProps> = props => {
  const { title,visible,children, type, onClose,className,closeable } = props
  const classes = classnames("alert",className, {
    [`alert-${type}`] : type,
  })

  const handleClick = () => {
    if(onClose) {
      onClose()
    }
  }
  
  return (
    <Transition
      in={visible}
      timeout={300}
      animation={"zoom-in-top"}
      wrapper
    >
      <div className={classes}>
        {title && <h4 className={"alert-title"}>{title}</h4>}
        <p className={"alert-message"}>{children}</p>
        {
          closeable && (
            <Icon
              icon={"times"}
              className={"alert-close-icon"}
              onClick={handleClick}
              size={"lg"}
            />
          )
        }
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type : "primary"
}