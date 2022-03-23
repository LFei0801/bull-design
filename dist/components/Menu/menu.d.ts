/**
 * Menu组件的属性
 * defaultIndex ?: 默认高亮显示的菜单项
 * className ?:
 * style ?:
 * onSelect ?: 菜单项被点击事件
 * mode ?: 横向还是纵向菜单
 * defaultOpenedMenu : 默认打开子菜单，应该是垂直菜单才有
 */
import React, { CSSProperties, FC } from "react";
export interface MenuProps {
    /**
     * 默认高亮显示的菜单
     */
    defaultIndex?: string;
    /**
     * 自定义类没
     */
    className?: string;
    /**
     * CSS Style
     */
    style?: CSSProperties;
    /**
     * 菜单类型
     * horizontal : 水平菜单
     * vertical : 垂直菜单
     */
    mode?: "horizontal" | "vertical";
    /**
     * 点击菜单项的回调函数
     */
    onSelect?: (selectIndex: string) => void;
    /**
     * 默认打开的子菜单
     */
    defaultOpenedMenu?: string[];
}
export declare const MenuContext: React.Context<{
    index: string;
    onSelect?: (selectIndex: string) => void;
    mode?: "horizontal" | "vertical";
    defaultOpenedMenu?: string[];
}>;
export declare const Menu: FC<MenuProps>;
