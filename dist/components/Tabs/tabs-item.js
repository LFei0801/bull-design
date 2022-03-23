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
import classnames from "classnames";
export var TabItem = function (props) {
    var style = props.style, label = props.label, children = props.children, isActive = props.isActive, className = props.className;
    var classes = classnames("tabs-content", className, {
        "tabs-content-active": isActive,
    });
    return (_jsx("div", __assign({ className: classes, style: style }, { children: children }), label));
};
TabItem.displayName = "tabItem";
TabItem.defaultProps = {
    disabled: false
};
