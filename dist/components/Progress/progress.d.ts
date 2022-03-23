/**
 * 进度条
 */
import { CSSProperties, FC } from "react";
export interface ProgressProps {
    /**
     * 进度
     */
    percentage: number;
    /**
     * 进度条高度
     */
    strokeHeight?: string;
    /**
     * 进度条颜色
     */
    theme?: "primary" | "danger" | "secondary" | "info" | "warning";
    /**
     * 进度条样式
     */
    style?: CSSProperties;
    /**
     * 是否显示进度
     */
    showText?: boolean;
}
export declare const Progress: FC<ProgressProps>;
