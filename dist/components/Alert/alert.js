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
import classnames from "classnames";
import { Icon } from "../Icon/icon";
import { Transition } from "../Transition/transition";
export var Alert = function (props) {
    var _a;
    var title = props.title, visible = props.visible, children = props.children, type = props.type, onClose = props.onClose, className = props.className, closeable = props.closeable;
    var classes = classnames("alert", className, (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var handleClick = function () {
        if (onClose) {
            onClose();
        }
    };
    return (_jsx(Transition, __assign({ in: visible, timeout: 300, animation: "zoom-in-top", wrapper: true }, { children: _jsxs("div", __assign({ className: classes }, { children: [title && _jsx("h4", __assign({ className: "alert-title" }, { children: title }), void 0), _jsx("p", __assign({ className: "alert-message" }, { children: children }), void 0), closeable && (_jsx(Icon, { icon: "times", className: "alert-close-icon", onClick: handleClick, size: "lg" }, void 0))] }), void 0) }), void 0));
};
Alert.defaultProps = {
    type: "primary"
};
