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
 * 轮播图组件
 */
import classnames from "classnames";
import { createContext, useEffect, useRef, useState } from "react";
import { CarouselItem } from "./carousel-item";
// Todo 优化ScrollX的动画逻辑
export var CarouselContext = createContext({
    activeIndex: 0,
    effect: "fade"
});
export var Carousel = function (props) {
    var data = props.data, dots = props.dots, optionStyle = props.optionStyle, effect = props.effect, autoplay = props.autoplay;
    var _a = useState(0), showIndex = _a[0], setShowIndex = _a[1];
    var carouselListRef = useRef(null);
    // 轮播图组件的宽度
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    // 自定播放时的timer
    var _c = useState(null), timer = _c[0], setTimer = _c[1];
    var classes = classnames("carousel-wrapper", {
        "effect-scrollX": effect === "scrollX",
        "effect-fade": effect === "fade"
    });
    // dot点击事件
    var handleClick = function (index) {
        setShowIndex(index);
        clearTimeout(timer);
        if (autoplay && timer) {
            var timer_1 = setInterval(function () {
                setShowIndex(function (prevIndex) {
                    if (prevIndex >= data.length - 1) {
                        return 0;
                    }
                    return prevIndex + 1;
                });
            }, 2500);
            setTimer(timer_1);
        }
    };
    // 自动获取设置轮播组件的宽度和高度
    useEffect(function () {
        var wrapper = document.querySelector(".carousel-wrapper");
        var li = wrapper.querySelector(".carousel-item");
        var div = li.querySelector("div");
        wrapper.style.width = div.offsetWidth + "px";
        wrapper.style.height = div.offsetHeight + "px";
        setWidth(div.offsetWidth);
    }, []);
    // 如果动画效果为滚动时
    // 根据当前的index自动设置元素的marginLeft
    useEffect(function () {
        if (effect === "scrollX") {
            if (carouselListRef.current) {
                carouselListRef.current.style.marginLeft = "-".concat(showIndex * width, "px");
            }
        }
    }, [showIndex, effect, width]);
    // 是否自动播放
    useEffect(function () {
        if (autoplay) {
            var timer_2 = setInterval(function () {
                setShowIndex(function (prevIndex) {
                    if (prevIndex >= data.length - 1) {
                        return 0;
                    }
                    return prevIndex + 1;
                });
            }, 2500);
            setTimer(timer_2);
        }
    }, []);
    return (_jsxs("div", __assign({ className: classes }, { children: [_jsx("ul", __assign({ className: "carousel-list", ref: carouselListRef }, { children: _jsx(CarouselContext.Provider, __assign({ value: { activeIndex: showIndex, effect: effect } }, { children: data === null || data === void 0 ? void 0 : data.map(function (item, index) { return (_jsx(CarouselItem, __assign({ index: index, optionStyle: optionStyle }, { children: item }), index)); }) }), void 0) }), void 0), _jsx("ul", __assign({ className: "dots-list" }, { children: dots && (data === null || data === void 0 ? void 0 : data.map(function (_, index) { return (_jsx("li", __assign({ className: "dots-item ".concat(showIndex === index ? "is-active" : ""), onClick: function () { return handleClick(index); } }, { children: _jsx("button", { children: index }, void 0) }), "dot-".concat(index))); })) }), void 0)] }), void 0));
};
Carousel.defaultProps = {
    effect: 'fade',
};
