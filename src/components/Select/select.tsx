/**
 * Select 属性
 *
 * options : string[]  选项列表
 * mode ?: single | multiple
 * defaultOptions ?: string[]
 */
import {FC, useEffect, useState} from "react";
import {Icon} from "../Icon/icon";
import classnames from "classnames";
import {Tag} from "../Tag/Tag";

export type optionType = {
  value : string
  selected : boolean
}

export interface SelectProps{
  /**
   * 提示的文字
   */
  placeholder ?: string
  /**
   * 渲染的下拉列表数据
   */
  options : string[]
  /*
  * 默认选择的下拉列表数据
   */
  defaultOptions ?: string | string[]
  /**
   * 单选或者多选
   */
  mode ?: "single" | "multiple",
  /**
   * 选择框的宽度，最大宽度为500px
   */
  width ?: string
}

// TODO 创建Option组件，增加组件语义化
export const Select:FC<SelectProps> = props => {
  const {options, defaultOptions, mode, placeholder, width} = props
  // 选项数组
  const [selectOptions,setSelectOption] = useState<optionType[]>([])
  // 是否显示选项列表
  const [showList,setShowList] = useState(false)
  // 输入框中的值
  const [selectValue,setSelectValue] = useState("")

  // 将options数组类型处理成optionType 数组类型
  useEffect(() => {
    const optionTypeArr = options.map(opt => {
      const iOpt : optionType = {value : opt, selected : false}
      if(mode === "single" && typeof defaultOptions === "string") {
        if(opt === defaultOptions) {
          iOpt.selected = true
        }
      }else if(mode === "single" && typeof defaultOptions !== "string") {
        console.error("defaultOptions must be a string value when mode is single")
      }else if(mode === "multiple" && Array.isArray(defaultOptions)) {
        if(defaultOptions?.includes(opt)) {
          iOpt.selected = true
        }
      }else {
        if(opt === defaultOptions) {
          iOpt.selected = true
        }
      }
      return iOpt
    })
    setSelectOption(optionTypeArr)
  },[defaultOptions, mode, options])

  // 根据selectOptions的值动态改变input的值
  useEffect(() => {
    const str = selectOptions.filter(opt => opt.selected).map(opt => opt.value).join(" ")
    setSelectValue(str)
  },[selectOptions, selectValue])

  // 点击配置选将其设为选则/未选择状态
  const handleClickItem = (index:number) => {
    // 更新options的状态
    setSelectOption(prevOptions => prevOptions.map((opt,i) => {
      // mode为single模式下，将其他的选项状态变为未选择状态
      if(mode === "single" && i !== index) {
        opt.selected = false
      }else if(i === index) {
        opt.selected = !opt.selected
      }
      return opt
    }))
    // mode为single模式下，关闭选项列表
    if(mode === "single") {
      setShowList(false)
    }
  }

  // 点击tag的关闭按钮，去除该选项
  const handleClickClose = (value:string) => {
    setSelectOption(preOptions => preOptions.map(opt => {
      if(opt.value === value) {
        opt.selected = false
      }
      return opt
    }))
  }

  const renderDropDown = () => {
    return <ul className={"select-list"}>
      {
        selectOptions.map((opt,index) => {
          const classes = classnames("select-item",{
            "is-selected" : opt.selected
          })
          return (
            <li
              key={index}
              className={classes}
              onClick={() => handleClickItem(index)}
            >
              {opt.value}
              {opt.selected && <Icon icon={"check"}/>}
            </li>
          )
        })
      }
    </ul>
  }

  const renderText = () => {
    if(!selectValue){
      return <span>{placeholder}</span>
    }
    if(mode === "multiple") {
      const selectedOptions = selectOptions.filter(opt => opt.selected)
      return selectedOptions.map((opt,index) => {
        return (
          <Tag key={index} type={"primary"} closeable onCloseClick={() => handleClickClose(opt.value)}>
            {opt.value}
          </Tag>
        )
      })
    }else {
      return <span>{selectValue}</span>
    }
  }

  return (
    <div className={"bull-select-wrapper"}  style={{width : width}}>
      <div className={"select-text-wrapper"}>
        {/* 文本*/}
        <span className={"select-text"}>
          {renderText()}
        </span>
        {/* 图标 */}
        <div className={"arrow-icon"}>
          <Icon
            icon={showList ? "angle-up" : "angle-down"}
            onClick={() => setShowList(!showList)}
          />
        </div>
      </div>

      {/* 下拉菜单栏  */}
      {showList && renderDropDown()}
    </div>
  )
}

Select.defaultProps = {
  mode : "single"
}