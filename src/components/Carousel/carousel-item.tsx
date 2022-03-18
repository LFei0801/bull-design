import classnames from "classnames";
import {CSSProperties, FC, useContext} from "react";
import {CarouselContext} from "./carousel";

export interface CarouselItemProps {
  index : number
  optionStyle ?: CSSProperties
}

export const CarouselItem :FC<CarouselItemProps> = props => {
  const {index, optionStyle, children} = props
  const context = useContext(CarouselContext)

  const classes = classnames("carousel-item", {
    "is-show" : context.activeIndex === index
  })

  return (
    <li
      key={index}
      className={classes}
    >
      <div style={optionStyle}>
        {children}
      </div>
    </li>
  )
}