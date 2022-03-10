/**
 * 对话框属性
 * title
 * visible
 * onOk
 * okText
 * onCancel
 * cancelText
 * className
 * style
 * closable
 */
import {CSSProperties, FC, ReactNode} from "react";
import {Icon} from "../Icon/icon";
import {Button} from "../Button/button";
import {Transition} from "../Transition/transition";

export interface ModalProps {
  /**
   * 对话框标题
   */
  title : string
  /**
   * 控制对话框是否显示
   */
  visible : boolean
  /**
   * 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
   */
  footer ?: ReactNode
  /**
   * 点击确定按钮回调函数
   */
  onOk ?: () => void
  /**
   * ok按钮文字
   */
  okText ?: string
  /**
   * 点击取消按钮回调函数
   */
  onCancel ?: () => void
  /**
   * 取消按钮杨文字
   */
  cancelText ?: string
  /**
   * 是否显示右上角确定按钮
   */
  closable ?: boolean
  /**
   * 自定义样式，如控制Model框位置等
   */
  style ?: CSSProperties
  /**
   * 自定义类型
   */
  className ?: string
}

// Todo 支持Promise事件
export const Modal:FC<ModalProps> = props => {
  const {
    title,
    onOk,
    onCancel,
    okText,
    cancelText,
    closable,
    style,
    visible,
    className,
    children,
    footer
  } = props

  const handleOk = () => {
    if(onOk) {
      onOk()
    }
  }

  const handleCancel = () => {
    if(onCancel) {
      onCancel()
    }
  }

  const generateFoot = () => {
    if(footer) {
      return footer
    }else if(footer === undefined) {
      return  (
        <>
            <Button
              onClick={handleCancel}
            >
              {cancelText}
            </Button>
            <Button
              btnType={"primary"}
              onClick={handleOk}
              style={{marginLeft:".5rem"}}
            >
              {okText}
            </Button>
        </>
      )
    }else {
      return null
    }
  }

  if(!visible) {
    return null
  }

  return (
    <div
      className={"modal-container"}
    >
      {/*遮罩层*/}
      <div className={"modal-mask"} />
      <div className={"bull-modal-wrap"}>
        <Transition
          in={visible}
          timeout={1000}
          animation={"zoom-in-top"}
        >
          {/* Modal*/}
          <div
            className={`bull-modal ${className}`}
            style={style}
          >
            {/*  头部 */}
            <div className={"model-header"}>
              <div className={"modal-title"}>{title}</div>
              {closable ?
                <Icon
                  className={"model-close-icon"}
                  size={"lg"}
                  icon={"times"}
                  theme={"secondary"}
                  onClick={handleCancel}
                />
                : null}
            </div>
            {/*内容*/}
            <div className={"modal-content"}>
              {children}
            </div>
            {/*  底部 */}
            <div className={"modal-footer"}>
              {generateFoot()}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  visible : false,
  closable : true,
  title : "Modal",
  okText : "确定",
  cancelText : "取消"
}