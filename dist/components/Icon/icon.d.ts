import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FC } from "react";
export interface IconProps extends FontAwesomeIconProps {
    /**
     * icon类型
     */
    theme?: "primary" | "warning" | "info" | "danger" | "secondary" | "light" | "dark" | "success";
}
export declare const Icon: FC<IconProps>;
