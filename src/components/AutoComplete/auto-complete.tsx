/*
* AutoComplete属性分析
* fetchSuggestions : 根据值发送的筛选逻辑， 支持Promise
* onSelect : 选择某一项时触发的回调
*
* 使用示例
* <AutoComplete
*   fetchSuggestions=(handleChange)
*   onSelect=(handleSelect)
* />
 */
import {ChangeEvent, FC, ReactElement, KeyboardEvent, useEffect, useState, useRef} from "react";
import {Input, InputProps} from "../Input/input";
import {Icon} from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import classnames from "classnames";
import useClickOutSide from "../../hooks/useClickOutSide";
import {Transition} from "../Transition/transition";

type DataSourceObject = {
  value : string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, "onSelect">{
  /**
   * 根据值发送的筛选逻辑， 支持Promise
   */
  fetchSuggestions : (data : string) => DataSourceType[] | Promise<DataSourceType[]>
  /*
  * 选择某一项时触发的回调
   */
  onSelect ?: (item : DataSourceType) => void
  /**
   * 自定义渲染模板
   */
  renderOption ?: (item:DataSourceType) => ReactElement
  /**
   * 延迟几秒发起搜索请求
   */
  delay ?: number
}

// TODO 添加测试文件
export const AutoComplete:FC<AutoCompleteProps> = props => {
  const { fetchSuggestions, onSelect, renderOption,delay,...restProps } = props

  const [inputValue,setInputValue] = useState<string>("")
  const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex,setHighlightIndex] = useState(-1)
  const debounceValue = useDebounce(inputValue,delay)
  const triggeredRef = useRef(false)
  const autoCompleteRef = useRef(null)

  /**
   * 点击外部区域自动关闭建议框
   */
  useClickOutSide(autoCompleteRef,() => {
    setSuggestions([])
  })

  // 当input value 发生改变时就触发搜索函数
  useEffect(() => {
    if(debounceValue && triggeredRef.current) {
      const result = fetchSuggestions(debounceValue)
      // 返回类型时Promise
      if(result instanceof Promise) {
        // 请求还没有返回时将loading状态设为true
        setLoading(true)
        result.then(data => {
          // 请求完毕将loading状态设为false
          setLoading(false)
          setSuggestions(data)
        })
      }
      // 返回类型不是Promise
      else{
        setSuggestions(result)
      }
    }else{
      setSuggestions([])
    }
  },[debounceValue])

  // 按下esc时，将高亮取消
  useEffect(() => {
    setHighlightIndex(-1)
  },[debounceValue])

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    triggeredRef.current = true
  }

  const handleSelect = (item : DataSourceType) => {
    setInputValue(item.value)
    triggeredRef.current = false
    if(onSelect){
      onSelect(item)
    }
  }

  // 设置高亮
  const highlight = (index : number) => {
    if(index < 0) {
      index = 0
    }else if(index > suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e:KeyboardEvent<HTMLElement>) => {
    const {keyCode} = e
    switch (keyCode) {
      // enter
      case 13 :
        if(suggestions.length) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      // up arrow
      case 38 :
        highlight(highlightIndex - 1)
        break
      // down arrow
      case 40 :
        highlight(highlightIndex + 1)
        break
      // esc
      case 27 :
        setInputValue("")
        setSuggestions([])
        break
      default :
        break
    }
  }

  const renderItem = (item : DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropDown = () => {
    return (
      <Transition
        in={suggestions.length !== 0}
        timeout={300}
        animation={"zoom-in-top"}
      >
        <ul className={"suggestion-list"}>
          {
            suggestions && suggestions.map((item,index) => {
              const classes = classnames("suggestion-item",{
                "is-highlight" : index === highlightIndex
              })
              return (
                <li
                  key={index}
                  className={classes}
                  onClick={() => handleSelect(item)}
                >
                  {renderItem(item)}
                </li>
              )
            })
          }
        </ul>
      </Transition>
    )
  }

  return (
    <div className={"bull-auto-complete"} ref={autoCompleteRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        icon={"search"}
        {...restProps}
      />
      {loading && (
        <Icon
          className={"suggestion-loading-icon"}
          icon={"spinner"}
          spin
        />
      )}
      { suggestions.length !== 0 ? generateDropDown() : null}
    </div>
  )
}


