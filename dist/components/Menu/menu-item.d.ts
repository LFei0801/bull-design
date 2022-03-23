/**
 * MenuItem组件属性
 * disabled ?: 禁用此菜单项
 * index : 菜单项标号
 * className
 * style
 */
import { CSSProperties, FC } from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
export declare const MenuItem: FC<MenuItemProps>;
