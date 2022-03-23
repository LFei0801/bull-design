import { CarouselProps } from "./carousel";
import { CarouselItemProps } from "./carousel-item";
import { FC } from 'react';
export declare type CarouselComponentType = FC<CarouselProps> & {
    Item: FC<CarouselItemProps>;
};
declare const TransCarousel: CarouselComponentType;
export default TransCarousel;
