import {Alert} from "../components/Alert/alert";
import { ComponentStory, ComponentMeta} from '@storybook/react'
import {useState} from "react";
import {Button} from "../components/Button/button";

export default  {
  title : "Component/Alert",
  component : Alert,
} as ComponentMeta<typeof Alert>

const Template : ComponentStory<typeof Alert> = args => <Alert {...args}/>

export const Default = Template.bind({})
Default.args = {
  visible : true,
  children : "alert message",
  closeable : true,
}

export const Title = Template.bind({})
Title.args = {
  visible : true,
  title : "alert title",
  children : "alert message"
}

export const Show = () => {
  const [visible,setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }
  return (
    <>
      <Button onClick={handleClick}>show Alert/close Alert</Button>
      <Alert
        visible={visible}
        title={"Alert Title"}
        onClose={() => setVisible(false)}
        closeable
      >
        Alert Message
        <p>this is alert content</p>
        <p>this is alert content</p>
        <p>this is alert content</p>
      </Alert>
    </>
  )
}

export const Warning = Template.bind({})
Warning.args = {
  visible : true,
  type : "warning",
  children : "alert message"
}

export const Info = Template.bind({})
Info.args = {
  visible : true,
  type : "info",
  children : "alert message"
}

export const Danger = Template.bind({})
Danger.args = {
  visible : true,
  type : "danger",
  children : "alert message"
}