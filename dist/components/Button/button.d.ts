import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
declare type NativeButtonAndLinkProps = Partial<ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>>;
export interface ButtonProps extends NativeButtonAndLinkProps {
    /**
     * 按钮尺寸
     */
    size?: "lg" | "sm";
    /**
     * 按钮类型
     * 当按钮类型为Link且href属性不为空时，Button组件渲染为a标签
     */
    btnType?: "default" | "primary" | "danger" | "warning" | "info" | "link";
    /**
     * 当按钮类型为Link时，使用此类型，执行跳转的url
     */
    href?: string;
    /**
     * 是否禁用Button
     */
    disabled?: boolean;
    /**
     * Button组件文本
     */
    children?: React.ReactNode;
}
export declare const Button: FC<ButtonProps>;
export {};
