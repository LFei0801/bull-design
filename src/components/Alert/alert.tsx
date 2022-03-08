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
  visible : boolean
  closeable ?: boolean
  onClose ?: () => void
  title ?: string
  children ?: ReactNode
  type ?: "primary" | "info" | "danger" | "warning"
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

  //Todo 添加动画效果，用icon组件替换关闭按钮
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