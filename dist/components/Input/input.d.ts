/**
 * input 属性
 * 继承自原生的 input 属性
 * size ?: 大小
 * prepend ?: 前缀
 * append ?: 后缀
 * icon ?: 图标
 * disabled ?: 禁用Input
 */
import { InputHTMLAttributes, ReactNode, FC, ChangeEvent, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size" | "onChange"> {
    /**
     * 禁止使用disabled
     */
    disabled?: boolean;
    /**
     * input 尺寸
     */
    size?: "lg" | "sm";
    /**
     * 前缀
     */
    prepend?: string | ReactNode;
    /**
     * 后缀
     */
    append?: string | ReactNode;
    /**
     * 搜索图标
     */
    icon?: IconProp;
    /**
     * input为受控组件时，调用此方法来改变input的value值
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * 点击图标触发的回调函数
     */
    onIconClick?: () => void;
    /**
     * Input框中的节点
     */
    children?: ReactElement;
}
export declare const Input: FC<InputProps>;
