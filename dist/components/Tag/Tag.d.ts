import { FC } from "react";
export interface TagProps {
    type?: "primary" | "warning" | "danger" | "info" | "default";
    closeable?: boolean;
    onCloseClick?: () => void;
}
export declare const Tag: FC<TagProps>;
