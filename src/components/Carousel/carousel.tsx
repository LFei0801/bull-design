/**
 * 轮播图组件
 */
import classnames from "classnames";
import React, {createContext, CSSProperties, FC, ReactNode, useEffect, useRef, useState} from "react";
import {CarouselItem} from "./carousel-item";

export interface CarouselProps {
  /**
   * 是否自动切换
   */
  autoplay ?: boolean
  /**
   * 是否显示面板知识点
   */
  dots ?: boolean
  /**
   * 轮播图的数据
   */
  data : string[] | ReactNode[]
  /**
   * 单个图片的样式
   */
  optionStyle ?: CSSProperties
  /**
   * effect 动画效果，scrollX | fade
   */
  effect ?: "scrollX" | "fade"
}

// Todo 优化ScrollX的动画逻辑
export const CarouselContext = createContext<{
  activeIndex : number,
  effect ?: "scrollX" | "fade",
}>({
  activeIndex : 0,
  effect : "fade"
})

export const Carousel : FC<CarouselProps> = props => {
  const { data, dots, optionStyle, effect, autoplay } = props
  const [showIndex,setShowIndex] = useState(0)
  const carouselListRef = useRef<HTMLUListElement>(null)
  // 轮播图组件的宽度
  const [width,setWidth] = useState<number>(0)
  // 自定播放时的timer
  const [timer,setTimer] = useState<any>(null)

  const classes = classnames("carousel-wrapper", {
    "effect-scrollX" : effect === "scrollX",
    "effect-fade" : effect === "fade"
  })

  // dot点击事件
  const handleClick = (index : number) => {
    setShowIndex(index)
    clearTimeout(timer)
    if(autoplay && timer) {
      let timer = setInterval(() => {
        setShowIndex(prevIndex => {
          if(prevIndex >= data.length - 1) {
            return 0
          }
          return prevIndex + 1
        })
      },2500)
      setTimer(timer)
    }
  }

  // 自动获取设置轮播组件的宽度和高度
  useEffect(() => {
    const wrapper = document.querySelector(".carousel-wrapper") as HTMLElement
    const li = wrapper.querySelector(".carousel-item") as HTMLElement
    const div = li.querySelector("div") as HTMLElement
    wrapper.style.width = div.offsetWidth + "px"
    wrapper.style.height = div.offsetHeight + "px"
    setWidth(div.offsetWidth)
  },[])

  // 如果动画效果为滚动时
  // 根据当前的index自动设置元素的marginLeft
  useEffect(() => {
    if(effect === "scrollX") {
      if(carouselListRef.current) {
        carouselListRef.current.style.marginLeft = `-${showIndex * width}px`
      }
    }
  },[showIndex, effect, width])

  // 是否自动播放
  useEffect(() => {
    if(autoplay) {
      let timer = setInterval(() => {
        setShowIndex(prevIndex => {
          if(prevIndex >= data.length - 1) {
            return 0
          }
          return prevIndex + 1
        })
      },2500)
      setTimer(timer)
    }
  },[])

  return (
    <div
      className={classes}
    >
      <ul
        className={"carousel-list"}
        ref={carouselListRef}
      >
        <CarouselContext.Provider value={{activeIndex : showIndex, effect}} >
          {
            data?.map((item,index) => (
              <CarouselItem
                index={index}
                optionStyle={optionStyle}
                key={index}
              >
                {item}
              </CarouselItem>
            ))
          }
        </CarouselContext.Provider>
      </ul>
      {/*  dots */}
      <ul className={"dots-list"}>
        {
          dots && data?.map((_,index) => (
            <li
              key={`dot-${index}`}
              className={`dots-item ${showIndex === index ? "is-active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <button>{index}</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Carousel.defaultProps = {
  effect : 'fade',
}
