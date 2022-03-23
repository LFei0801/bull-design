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
 * tabs标签卡属性
 * className
 * style
 * onSelect 选择标签回调事件
 * defaultIndex 默认打开标签序号
 * mode : line | card
 */
import React, { useState } from "react";
import classnames from "classnames";
export var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, style = props.style, onSelect = props.onSelect, mode = props.mode, className = props.className, children = props.children;
    var _a = useState(defaultIndex), currentIndex = _a[0], setCurrentIndex = _a[1];
    var classes = classnames("tabs-nav", className, {
        "tabs-line": mode === "line",
        "tabs-card": mode === "card"
    });
    var handleClick = function (index, disabled) {
        if (disabled === void 0) { disabled = false; }
        if (!disabled) {
            setCurrentIndex(index);
            if (onSelect) {
                onSelect(index);
            }
        }
    };
    // 渲染标签 ， 由li标签组成
    var renderTabItemLabel = function () { return React.Children.map(children, function (child, index) {
        var childElement = child;
        var itemLabelCLasses = classnames("tabs-label", {
            "tabs-label-disabled": childElement.props.disabled,
            "tabs-label-active": currentIndex === index
        });
        if (childElement.type.displayName === "tabItem") {
            return (_jsx("li", __assign({ className: itemLabelCLasses, onClick: function () { return handleClick(index, childElement.props.disabled); } }, { children: childElement.props.label }), void 0));
        }
        else {
            console.error("Warning: tabs has a child Which is not a TabItem");
        }
    }); };
    // 渲染内容
    var renderItemContent = function () { return React.Children.map(children, function (child, index) {
        var childElement = child;
        if (childElement.type.displayName === "tabItem") {
            return React.cloneElement(childElement, {
                isActive: currentIndex === index
            });
        }
        else {
            console.error("Warning: tabs has a child Which is not a TabItem");
        }
    }); };
    return (_jsxs("nav", __assign({ className: classes, style: style, "data-testid": "test" }, { children: [_jsx("ul", __assign({ className: "tabs-ul" }, { children: renderTabItemLabel() }), void 0), renderItemContent()] }), void 0));
};
Tabs.defaultProps = {
    mode: "line",
    defaultIndex: 0
};
