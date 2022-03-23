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
import { useContext } from "react";
import { CarouselContext } from "./carousel";
export var CarouselItem = function (props) {
    var index = props.index, optionStyle = props.optionStyle, children = props.children;
    var context = useContext(CarouselContext);
    var classes = classnames("carousel-item", {
        "is-show": context.activeIndex === index
    });
    return (_jsx("li", __assign({ className: classes }, { children: _jsx("div", __assign({ style: optionStyle }, { children: children }), void 0) }), index));
};
