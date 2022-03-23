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
 * Tag
 */
import classnames from "classnames";
import { Icon } from "../Icon/icon";
export var Tag = function (props) {
    var _a;
    var closeable = props.closeable, type = props.type, onCloseClick = props.onCloseClick, children = props.children;
    var classes = classnames("bull-tag", (_a = {},
        _a["tag-".concat(type)] = type,
        _a));
    return (_jsxs("div", __assign({ className: classes }, { children: [children, closeable && _jsx(Icon, { onClick: onCloseClick, className: "tag-close-icon", icon: "times" }, void 0)] }), void 0));
};
Tag.defaultProps = {
    type: "default",
    closeable: false
};
