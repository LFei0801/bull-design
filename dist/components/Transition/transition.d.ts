/**
 * 封装CSSTransition
 * 默认使得unMountExit 为true
 * 绑定默认动画
 */
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { FC } from "react";
export declare type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';
export declare type TransitionProps<Ref extends undefined | HTMLElement = undefined> = CSSTransitionProps<Ref> & {
    animation?: AnimationName;
    wrapper?: boolean;
};
export declare const Transition: FC<TransitionProps>;
