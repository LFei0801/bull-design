import { FC, ReactElement } from "react";
import { InputProps } from "../Input/input";
declare type DataSourceObject = {
    value: string;
};
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    /**
     * 根据值发送的筛选逻辑， 支持Promise
     */
    fetchSuggestions: (data: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    /**
     * 自定义渲染模板
     */
    renderOption?: (item: DataSourceType) => ReactElement;
    /**
     * 延迟几秒发起搜索请求
     */
    delay?: number;
}
export declare const AutoComplete: FC<AutoCompleteProps>;
export {};
