import { TabsProps } from "./tabs";
import { TabsItemProps } from "./tabs-item";
import { FC } from "react";
export declare type TabsComponentType = FC<TabsProps> & {
    Item: FC<TabsItemProps>;
};
declare const TransTabs: TabsComponentType;
export default TransTabs;
