import React, { CSSProperties, FC, ReactNode } from "react";
export interface CarouselProps {
    /**
     * 是否自动切换
     */
    autoplay?: boolean;
    /**
     * 是否显示面板知识点
     */
    dots?: boolean;
    /**
     * 轮播图的数据
     */
    data: string[] | ReactNode[];
    /**
     * 单个图片的样式
     */
    optionStyle?: CSSProperties;
    /**
     * effect 动画效果，scrollX | fade
     */
    effect?: "scrollX" | "fade";
}
export declare const CarouselContext: React.Context<{
    activeIndex: number;
    effect?: "scrollX" | "fade";
}>;
export declare const Carousel: FC<CarouselProps>;
