var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * MenuItem组件属性
 * disabled ?: 禁用此菜单项
 * index : 菜单项标号
 * className
 * style
 */
import { useContext } from "react";
import classnames from "classnames";
import { MenuContext } from './menu';
export var MenuItem = function (props) {
    var index = props.index, className = props.className, style = props.style, disabled = props.disabled, children = props.children;
    var context = useContext(MenuContext);
    var classes = classnames("menu-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && index !== undefined) {
            context.onSelect(index);
        }
    };
    return (_jsx("li", __assign({ style: style, className: classes, onClick: handleClick }, { children: children }), void 0));
};
MenuItem.displayName = "menuItem";
