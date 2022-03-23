import { Tabs , TabsProps} from "./tabs";
import {TabItem, TabsItemProps} from "./tabs-item";
import {FC} from "react";

export type TabsComponentType = FC<TabsProps> & {
  Item : FC<TabsItemProps>
}

const TransTabs = Tabs as TabsComponentType
TransTabs.Item = TabItem

export default TransTabs