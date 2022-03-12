import { ComponentStory, ComponentMeta} from '@storybook/react'
import {Tag} from "../components/Tag/Tag";

export default  {
  title : "Tag",
  component : Tag
} as ComponentMeta<typeof Tag>

const Template : ComponentStory<typeof Tag> = args => <Tag {...args}/>

export const defaultTags = Template.bind({})
defaultTags.args = {
  type : "default",
  children : "tag1"
}


export const closeTags = Template.bind({})
closeTags.args = {
  closeable : true,
  type : "default",
  children : "close tag",
  onCloseClick : () => console.log("clicking")
}