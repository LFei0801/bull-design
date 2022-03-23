import { CSSProperties, FC } from "react";
export interface CarouselItemProps {
    index: number;
    optionStyle?: CSSProperties;
}
export declare const CarouselItem: FC<CarouselItemProps>;
