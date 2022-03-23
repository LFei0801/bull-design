/**
 * 对话框属性
 * title
 * visible
 * onOk
 * okText
 * onCancel
 * cancelText
 * className
 * style
 * closable
 */
import { CSSProperties, FC, ReactNode } from "react";
export interface ModalProps {
    /**
     * 对话框标题
     */
    title: string;
    /**
     * 控制对话框是否显示
     */
    visible: boolean;
    /**
     * 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
     */
    footer?: ReactNode;
    /**
     * 点击确定按钮回调函数
     */
    onOk?: () => void;
    /**
     * ok按钮文字
     */
    okText?: string;
    /**
     * 点击取消按钮回调函数
     */
    onCancel?: () => void;
    /**
     * 取消按钮杨文字
     */
    cancelText?: string;
    /**
     * 是否显示右上角确定按钮
     */
    closable?: boolean;
    /**
     * 自定义样式，如控制Model框位置等
     */
    style?: CSSProperties;
    /**
     * 自定义类型
     */
    className?: string;
}
export declare const Modal: FC<ModalProps>;
