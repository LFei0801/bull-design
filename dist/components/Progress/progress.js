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
export var Progress = function (props) {
    var percentage = props.percentage, strokeHeight = props.strokeHeight, theme = props.theme, style = props.style, showText = props.showText;
    return (_jsx("div", __assign({ className: "bull-process-bar", style: style }, { children: _jsx("div", __assign({ className: "bull-process-bar-outer", style: { height: "".concat(strokeHeight, "px") } }, { children: _jsx("div", __assign({ className: "bull-process-bar-inner color-".concat(theme), style: { width: "".concat(percentage, "%") } }, { children: showText && _jsx("span", __assign({ className: "inner-text" }, { children: "".concat(percentage, "%") }), void 0) }), void 0) }), void 0) }), void 0));
};
Progress.defaultProps = {
    strokeHeight: "15px",
    showText: true,
    theme: 'primary'
};
