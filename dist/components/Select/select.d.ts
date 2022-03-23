/**
 * Select 属性
 *
 * options : string[]  选项列表
 * mode ?: single | multiple
 * defaultOptions ?: string[]
 */
import { FC } from "react";
export declare type optionType = {
    value: string;
    selected: boolean;
};
export interface SelectProps {
    /**
     * 提示的文字
     */
    placeholder?: string;
    /**
     * 渲染的下拉列表数据
     */
    options: string[];
    defaultOptions?: string | string[];
    /**
     * 单选或者多选
     */
    mode?: "single" | "multiple";
    /**
     * 选择框的宽度，最大宽度为500px
     */
    width?: string;
}
export declare const Select: FC<SelectProps>;
