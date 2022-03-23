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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * subMenu 属性
 * title : subMenu 标题
 * index :
 * className
 * style
 */
import React, { useContext, Children, useState } from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
import { Icon } from "../Icon/icon";
import { Transition } from "../Transition/transition";
export var SubMenu = function (props) {
    var context = useContext(MenuContext);
    var title = props.title, className = props.className, children = props.children, index = props.index, style = props.style;
    var openedMenus = context.defaultOpenedMenu;
    var isOpened = (index && context.mode === "vertical") ? openedMenus.includes(index) : false;
    var _a = useState(isOpened), open = _a[0], setOpen = _a[1];
    var classes = classnames("menu-item", className, {
        "is-active": context.index === index,
        "is-vertical": context.mode === "vertical",
        "is-opened": open
    });
    var renderChildren = function () {
        var classes = classnames("bull-sub-menu", {
            "is-open": open
        });
        var childElements = Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "menuItem") {
                return React.cloneElement(childElement, { index: "".concat(i, "-").concat(index) });
            }
            else {
                console.error("warning : Submenu has a child which not a MenuItem Component");
            }
        });
        return (_jsx(Transition, __assign({ in: open, timeout: 300, animation: "zoom-in-top" }, { children: _jsx("ul", __assign({ className: classes }, { children: childElements }), void 0) }), void 0));
    };
    var handleClick = function () {
        setOpen(!open);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvent = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    var mouseEvent = context.mode === "horizontal" ? {
        onMouseEnter: function (e) { return handleMouse(e, true); },
        onMouseLeave: function (e) { return handleMouse(e, false); }
    } : {};
    return (_jsxs("li", __assign({ className: classes, style: style }, mouseEvent, { children: [_jsxs("div", __assign({ className: "sub-menu-title" }, clickEvent, { children: [title, _jsx(Icon, { icon: "angle-down", className: "arrow-icon" }, void 0)] }), void 0), renderChildren()] }), void 0));
};
SubMenu.displayName = "subMenu";
