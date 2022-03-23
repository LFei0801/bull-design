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
 * Menu组件的属性
 * defaultIndex ?: 默认高亮显示的菜单项
 * className ?:
 * style ?:
 * onSelect ?: 菜单项被点击事件
 * mode ?: 横向还是纵向菜单
 * defaultOpenedMenu : 默认打开子菜单，应该是垂直菜单才有
 */
import React, { createContext, useState } from "react";
import classnames from "classnames";
export var MenuContext = createContext({ index: "0" });
export var Menu = function (props) {
    var defaultIndex = props.defaultIndex, style = props.style, onSelect = props.onSelect, mode = props.mode, className = props.className, children = props.children, defaultOpenedMenu = props.defaultOpenedMenu;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classnames("bull-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode === "horizontal"
    });
    var handleSelect = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var renderChildren = function () {
        // 遍历Children元素
        // 如果children元素是MenuItem 或者 SubMenu 就渲染，否则就输出一个Warning
        return React.Children.map(children, function (child, index) {
            var childELe = child;
            var displayName = childELe.type.displayName;
            if (displayName === "menuItem" || displayName === "subMenu") {
                // 默认传入index给子元素，不需要显示传入index
                return React.cloneElement(childELe, { index: "".concat(index) });
            }
            else {
                console.error("warning : menu has a child which not a MenuItem Component");
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style, "data-testid": "test-menu" }, { children: _jsx(MenuContext.Provider, __assign({ value: {
                index: currentActive ? currentActive : "0",
                onSelect: handleSelect,
                mode: mode,
                defaultOpenedMenu: defaultOpenedMenu
            } }, { children: renderChildren() }), void 0) }), void 0));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenedMenu: []
};
