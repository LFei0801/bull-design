import { ComponentStory, ComponentMeta} from '@storybook/react'
import {Progress} from "../components/Progress/progress";

export default {
  title : "Progress",
  component : Progress
} as ComponentMeta<typeof Progress>

const Template : ComponentStory<typeof Progress> = args => <Progress {...args} />

export const defaultProgress = Template.bind({})
defaultProgress.args = {
  percentage : 50,
  strokeHeight : "15"
}
