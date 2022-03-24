import { ComponentMeta, ComponentStory} from '@storybook/react'
import {Carousel} from "../components/Carousel/carousel";
import {CSSProperties} from "react";

export default {
  title : "Component/Carousel",
  component : Carousel
} as ComponentMeta<typeof Carousel>

const Template : ComponentStory<typeof Carousel> = args => <Carousel {...args}/>

const contentStyle : CSSProperties = {
  width : "320px",
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  display : "flex",
  justifyContent : "center",
  alignItems : "center"
}

const data = [
  <h1>1</h1>,
  <h1>2</h1>,
  <h1>3</h1>,
  <h1>4</h1>,
]


export const defaultCarousel = Template.bind({})
defaultCarousel.args = {
  dots : true,
  data : data,
  optionStyle : contentStyle,
  effect : "fade"
}

export const scrollCarousel = Template.bind({})
scrollCarousel.args = {
  dots : true,
  data : data,
  optionStyle : contentStyle,
  effect : "scrollX"
}


export const AutoPlayCarousel = Template.bind({})
AutoPlayCarousel.args = {
  dots : true,
  data : data,
  optionStyle : contentStyle,
  effect : "scrollX",
  autoplay : true
}

