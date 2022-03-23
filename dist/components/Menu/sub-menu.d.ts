/**
 * subMenu 属性
 * title : subMenu 标题
 * index :
 * className
 * style
 */
import { CSSProperties, FC } from "react";
export interface SubMenuProps {
    title: string;
    index?: string;
    className?: string;
    style?: CSSProperties;
}
export declare const SubMenu: FC<SubMenuProps>;
