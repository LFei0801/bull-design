/**
 * input 属性
 * 继承自原生的 input 属性
 * size ?: 大小
 * prepend ?: 前缀
 * append ?: 后缀
 * icon ?: 图标
 * disabled ?: 禁用Input
 */
import {InputHTMLAttributes, ReactNode, FC, ChangeEvent, ReactElement} from "react";
import classnames from "classnames"
import {Icon} from "../Icon/icon";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

// 删除原生的size属性，改用i定义的size属性
// 将onchange event事件默认绑定为HTMLInputElement上的事件
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"|"onChange"> {
  /**
   * 禁止使用disabled
   */
  disabled ?: boolean
  /**
   * input 尺寸
   */
  size ?: "lg" | "sm",
  /**
   * 前缀
   */
  prepend ?: string | ReactNode
  /**
   * 后缀
   */
  append ?: string | ReactNode
  /**
   * 搜索图标
   */
  icon ?: IconProp
  /**
   * input为受控组件时，调用此方法来改变input的value值
   */
  onChange ?: (e:ChangeEvent<HTMLInputElement>) => void
  /**
   * 点击图标触发的回调函数
   */
  onIconClick ?: () => void
  /**
   * Input框中的节点
   */
  children ?:  ReactElement
}

export const Input:FC<InputProps> = props => {
  const {disabled,size, prepend, icon, append,className, style, onIconClick,...restProps } = props

  const classes = classnames("bull-input-wrapper",className, {
    [`input-size-${size}`] : size,
    "is-disabled" : disabled,
    "input-group" : append || prepend,
    "input-group-prepend" : prepend,
    "input-group-append"  : append
  })

  // 如果受控组件没有传入默认值
  // 就将value的属性默认修改为空字符串
  // 即运行进行 const [value,setValue] = useState() 来使用 ，但是不推荐
  const fixedRestPropsValue = (value : any) => {
    if(typeof value === undefined || value === null) {
      return ""
    }
    return value
  }

  if("value" in restProps) {
    delete restProps.defaultValue
    restProps.value = fixedRestPropsValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {/*  前缀 */}
      {prepend && <div className={"bull-input-group-prepend"}>{prepend}</div>}
      {/* icon */}
      {icon &&
      <div className={"icon-wrapper"} onClick={onIconClick}>
        <Icon icon={icon} />
      </div>
      }
      {/*  input */}
      <input
        className={"bull-input-inner"}
        disabled={disabled}
        {...restProps}
      />
      {/* 后缀 */}
      {append && <div className={"bull-input-group-append"}>{append}</div>}
    </div>
  )
}

Input.defaultProps = {
  disabled : false
}