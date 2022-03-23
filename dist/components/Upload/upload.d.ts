import { FC } from "react";
export declare type UploadFileType = {
    uid: string;
    name: string;
    size?: number;
    status?: "ready" | "success" | 'error' | "uploading";
    percentage?: number;
    raw?: File;
    response?: any;
    error?: any;
};
export interface UploadProps {
    /**
     * 文件上传的地址
     */
    action: string;
    /**
     * 上传过程中的回调
     */
    onProgress?: (percentage: number, file: UploadFileType) => void;
    /**
     * 文件上传成功的回调
     */
    onSuccess?: (data: any, file: UploadFileType) => void;
    /**
     * 文件上传失败的回调
     */
    onError?: (err: any, file: UploadFileType) => void;
    /**
     * 文件上传之前做的一些处理
     */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /**
     * 文件后的回调函数
     * 成功和失败都会触发
     */
    onChange?: (data: any, file: UploadFileType) => void;
    /**
     * 初始的上传文件列表
     */
    defaultUploadFileList?: UploadFileType[];
    /**
     * 删除文件的回调函数
     */
    onRemove?: (_file: UploadFileType) => void;
    /**
     * 自定义header
     * 比如 : Content-Type : "application/json"
     */
    headers?: {
        [key: string]: any;
    };
    /**
     * 发送到后端的文件参数名称
     */
    name?: string;
    /**
     * 上传所需的额外参数
     */
    data?: {
        [key: string]: any;
    };
    /**
     * 是否携带 cookie
     */
    withCredentials?: boolean;
    /**
     * 是否支持上传多个文件
     */
    multiple?: boolean;
    /**
     * 允许上传文件的后缀名
     */
    accept?: string;
    /**
     * 拖住上传组件
     */
    drag?: boolean;
}
export declare const Upload: FC<UploadProps>;
