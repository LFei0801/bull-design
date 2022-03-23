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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
export var Button = function (props) {
    var _a;
    var disabled = props.disabled, btnType = props.btnType, size = props.size, href = props.href, children = props.children, className = props.className, resetProps = __rest(props, ["disabled", "btnType", "size", "href", "children", "className"]);
    var classes = classnames("btn", className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a["disabled"] = btnType === "link" && disabled,
        _a));
    if (btnType === "link" && href) {
        return _jsx("a", __assign({ className: classes, href: href }, resetProps, { children: children }), void 0);
    }
    return _jsx("button", __assign({ className: classes, disabled: disabled }, resetProps, { children: children }), void 0);
};
Button.defaultProps = {
    btnType: "default",
};
