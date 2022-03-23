/**
 * 上传的文件列表
 */
import { UploadFileType } from "./upload";
import { FC } from "react";
export interface UploadListProps {
    fileList: UploadFileType[];
    onRemove?: (_file: UploadFileType) => void;
}
export declare const UploadList: FC<UploadListProps>;
