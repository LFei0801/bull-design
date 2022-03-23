/**
 * tabs-item 组件属性
 * className
 * style
 * label 标签标题，作用与li标签上
 * disabled 禁止此项标签被点击
 */
import { CSSProperties, FC } from "react";
export interface TabsItemProps {
    style?: CSSProperties;
    className?: string;
    label: string;
    disabled?: boolean;
    isActive?: boolean;
}
export declare const TabItem: FC<TabsItemProps>;
