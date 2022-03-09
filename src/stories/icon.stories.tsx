import {Icon} from "../components/Icon/icon";
import { ComponentStory, ComponentMeta} from "@storybook/react"

export default {
  title : "Icon",
  component : Icon,
  argTypes : {
    icon : {
      type : "string",
      description : "icon名字"
    },
    size : {
      type : "string",
      description : "icon大小"
    }
  }
} as ComponentMeta<typeof Icon>

const Template:ComponentStory<typeof Icon> = args => <Icon {...args}/>

export const Default = Template.bind({})
Default.args = {
  icon : "coffee"
}

export const Primary = Template.bind({})
Primary.args = {
  theme : "primary",
  icon : "check-circle"
}

export const Success = Template.bind({})
Success.args = {
  theme : "success",
  icon : "check-circle"
}

export const Error = Template.bind({})
Error.args = {
  theme : "danger",
  icon : "check-circle"
}

export const Warning = Template.bind({})
Warning.args = {
  theme : "warning",
  icon : "check-circle"
}

export const CakeIcon = Template.bind({})
CakeIcon.args = {
  theme : "info",
  icon : "cake"
}

export const DifferentSizeCakeIcon = Template.bind({})
DifferentSizeCakeIcon.args = {
  theme : "info",
  icon : "cake",
  size : "5x"
}