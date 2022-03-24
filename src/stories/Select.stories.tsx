import { ComponentStory, ComponentMeta} from '@storybook/react'
import {Select} from "../components/Select/select";

export default {
  title : "Component/Select",
  component : Select
} as ComponentMeta<typeof Select>

const options = [
  "Alice",
  "Bob",
  "Alan",
  "Luffy",
  "Nami"
]

const Template : ComponentStory<typeof Select> = args => <Select {...args} />

export const singleSelect = Template.bind({})
singleSelect.args = {
  mode : "single",
  options : options,
  defaultOptions : "Luffy",
  width : "200px",
  placeholder : "请选择",
}

export const multipleSelect = Template.bind({})
multipleSelect.args = {
  mode : "multiple",
  options : options,
  width : "200px",
  placeholder : "请选择",
}