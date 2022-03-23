/**
 * 文本拖拽上传
 */
import { FC } from "react";
export interface DraggerProps {
    onFile: (file: FileList) => void;
}
export declare const Dragger: FC<DraggerProps>;
