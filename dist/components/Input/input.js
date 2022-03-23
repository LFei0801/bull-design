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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from "classnames";
import { Icon } from "../Icon/icon";
export var Input = function (props) {
    var _a;
    var disabled = props.disabled, size = props.size, prepend = props.prepend, icon = props.icon, append = props.append, className = props.className, style = props.style, onIconClick = props.onIconClick, restProps = __rest(props, ["disabled", "size", "prepend", "icon", "append", "className", "style", "onIconClick"]);
    var classes = classnames("bull-input-wrapper", className, (_a = {},
        _a["input-size-".concat(size)] = size,
        _a["is-disabled"] = disabled,
        _a["input-group"] = append || prepend,
        _a["input-group-prepend"] = prepend,
        _a["input-group-append"] = append,
        _a));
    // 如果受控组件没有传入默认值
    // 就将value的属性默认修改为空字符串
    // 即运行进行 const [value,setValue] = useState() 来使用 ，但是不推荐
    var fixedRestPropsValue = function (value) {
        if (typeof value === undefined || value === null) {
            return "";
        }
        return value;
    };
    if ("value" in restProps) {
        delete restProps.defaultValue;
        restProps.value = fixedRestPropsValue(props.value);
    }
    return (_jsxs("div", __assign({ className: classes, style: style }, { children: [prepend && _jsx("div", __assign({ className: "bull-input-group-prepend" }, { children: prepend }), void 0), icon &&
                _jsx("div", __assign({ className: "icon-wrapper", onClick: onIconClick }, { children: _jsx(Icon, { icon: icon }, void 0) }), void 0), _jsx("input", __assign({ className: "bull-input-inner", disabled: disabled }, restProps), void 0), append && _jsx("div", __assign({ className: "bull-input-group-append" }, { children: append }), void 0)] }), void 0));
};
Input.defaultProps = {
    disabled: false
};
