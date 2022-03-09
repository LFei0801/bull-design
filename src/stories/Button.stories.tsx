import {Button} from "../components/Button/button";
import { ComponentStory, ComponentMeta} from '@storybook/react'

export default {
  title : "Button",
  component : Button,
  argTypes : {
   btnType : {
     table : {
       defaultValue : {
         summary : "default",
         detail : "default button,white Background, gray border"
       }
     },
     size: {
       type: 'string',
       description: 'the size of this button',
       table: {
         type: {
           summary: 'string',
         },
         defaultValue: {
           summary: 'df'
         },
       },
       control: {
         type: 'inline-radio',
         options: ['sm','lg']
       },
     },
     onClick: { action: 'clicked' }
   },
  }
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button>  = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  btnType : "default",
  disabled : false,
  children : "演示按钮"
}

export const Primary = Template.bind({})
Primary.args = {
  btnType : "primary",
  disabled : false,
  children : "演示按钮"
}

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  btnType: 'primary',
  size: "lg",
  disabled: false,
  children : "演示按钮"
}

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  btnType: 'primary',
  size: "sm",
  disabled: false,
  children : "演示按钮"
}

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  btnType: 'primary',
  disabled: true,
  children : "演示按钮"
}

export const Danger = Template.bind({})
Danger.args = {
  btnType : "danger",
  disabled : false,
  children : "演示按钮"
}

export const Warning = Template.bind({})
Warning.args = {
  btnType : "warning",
  disabled : false,
  children : "演示按钮"
}

export const Info = Template.bind({})
Info.args = {
  btnType : "info",
  disabled : false,
  children : "演示按钮"
}

export const Link = Template.bind({})
Link.args = {
  btnType : "link",
  href : "https://www.baidu.com",
  children : "link to baidu"
}

export  const LinkDisabled = Template.bind({})
LinkDisabled.args = {
  btnType : "link",
  href : "https://www.baidu.com",
  children : "disabled link to baidu"
}
