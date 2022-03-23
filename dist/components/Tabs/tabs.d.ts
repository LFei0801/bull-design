/**
 * tabs标签卡属性
 * className
 * style
 * onSelect 选择标签回调事件
 * defaultIndex 默认打开标签序号
 * mode : line | card
 */
import { CSSProperties, FC } from "react";
export interface TabsProps {
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * css style
     */
    style?: CSSProperties;
    /**
     * 点击选项卡触发的回调函数
     * @param selectIndex
     */
    onSelect?: (selectIndex: number) => void;
    /**
     * 默认显示的选项卡
     */
    defaultIndex?: number;
    /**
     * 选项卡样式
     */
    mode?: "line" | "card";
}
export declare const Tabs: FC<TabsProps>;
