/**
 * 进度条
 */
import {CSSProperties, FC} from "react";

export interface  ProgressProps {
  /**
   * 进度
   */
  percentage : number
  /**
   * 进度条高度
   */
  strokeHeight ?: string
  /**
   * 进度条颜色
   */
  theme ?: "primary" | "danger" | "secondary" | "info" | "warning"
  /**
   * 进度条样式
   */
  style ?: CSSProperties
  /**
   * 是否显示进度
   */
  showText ?: boolean
}

export const Progress:FC<ProgressProps> = props => {
  const {
    percentage,
    strokeHeight,
    theme,
    style,
    showText
  } = props

  return (
    <div className={"bull-process-bar"} style={style}>
      <div
        className={"bull-process-bar-outer"}
        style={{ height : `${strokeHeight}px`}}
      >
        <div
          className={`bull-process-bar-inner color-${theme}`}
          style={{width : `${percentage}%`}}
        >
          {showText && <span className={"inner-text"}>{`${percentage}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight : "15px",
  showText : true,
  theme : 'primary'
}