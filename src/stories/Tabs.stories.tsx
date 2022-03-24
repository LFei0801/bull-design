import {Tabs, TabsProps} from "../components/Tabs/tabs";
import {TabItem} from "../components/Tabs/tabs-item";
import { ComponentMeta} from '@storybook/react'

export default {
  title : "Component/Tabs",
  component : Tabs
} as ComponentMeta<typeof Tabs>

export const LinkTabs = (args : TabsProps) => {
  return (
    <Tabs
    >
      <TabItem label={"tab item 1"}>
        tab item content 01
      </TabItem>
      <TabItem label={"tab item 2"}>
        tab item content 02
      </TabItem>
      <TabItem label={"tab item 3"}>
        tab item content 03
      </TabItem>
      <TabItem label={"tab item 4"} disabled>
        tab item content 04
      </TabItem>
    </Tabs>
  )
}

export const CardTabs = (args : TabsProps) => {
  return (
    <Tabs
      mode={"card"}
    >
      <TabItem label={"tab item 1"}>
        tab item content 01
      </TabItem>
      <TabItem label={"tab item 2"}>
        tab item content 02
      </TabItem>
      <TabItem label={"tab item 3"}>
        tab item content 03
      </TabItem>
      <TabItem label={"tab item 4"} disabled>
        tab item content 04
      </TabItem>
    </Tabs>
  )
}