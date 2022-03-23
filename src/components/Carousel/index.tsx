import {Carousel, CarouselProps} from "./carousel";
import {CarouselItem, CarouselItemProps} from "./carousel-item";

import {FC} from 'react'

export type CarouselComponentType = FC<CarouselProps> & {
  Item : FC<CarouselItemProps>
}

const TransCarousel = Carousel as CarouselComponentType

TransCarousel.Item = CarouselItem

export default TransCarousel