import { ComponentMeta, ComponentStory} from '@storybook/react'
import {Input} from "../components/Input/input";
import {useState} from "react";

export default  {
  title : "Input",
  component : Input
} as ComponentMeta<typeof Input>

const Template : ComponentStory<typeof Input> = args => <Input {...args}/>

export const defaultInput = Template.bind({})
defaultInput.args = {
  placeholder : "默认的Input输入框"
}

export const AddonInput = Template.bind({})
AddonInput.args = {
  placeholder : "带前缀和后缀的输入框",
  prepend : "https://",
  append : ".com"
}

export const IconInput = Template.bind({})
IconInput.args = {
  placeholder : "带图标的输入框",
  icon : "search",
  onClick : () => console.log("searching")
}

export const sizeInput = Template.bind({})
sizeInput.args = {
  placeholder : "不同尺寸的输入框",
  size : "lg"
}

export const ControlledInput = () => {
  const [value,setValue] = useState()
  // @ts-ignore
  return <Input value={value} onChange={(e) => setValue(e.target.value)}/>
}

export  const DisabledInput = Template.bind({})
DisabledInput.args = {
  placeholder : "带前缀和后缀的输入框",
  prepend : "https://",
  append : ".com",
  disabled : true,
}