/**
 * 封装CSSTransition
 * 默认使得unMountExit 为true
 * 绑定默认动画
 */

import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps} from 'react-transition-group/CSSTransition'
import {FC} from "react";

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';

export type TransitionProps<Ref extends undefined | HTMLElement = undefined>
  = CSSTransitionProps<Ref> & {
  animation ?: AnimationName,
  // 添加一层dom, 避免transition冲突
  wrapper ?: boolean
}

export const Transition:FC<TransitionProps> = props => {
  const {
    classNames,
    animation,
    children,
    wrapper,
    ...restProps
  } = props

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {
        wrapper ? <div>{children}</div> : children
      }
    </CSSTransition>
  )
}

Transition.defaultProps = {
  animation : "zoom-in-top",
  // 默认设置动画进入时挂载组件，离开时卸载组件的效果
  unmountOnExit : true,
  appear : true
}