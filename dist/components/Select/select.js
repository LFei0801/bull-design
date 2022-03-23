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
 * Select 属性
 *
 * options : string[]  选项列表
 * mode ?: single | multiple
 * defaultOptions ?: string[]
 */
import { useEffect, useState } from "react";
import { Icon } from "../Icon/icon";
import classnames from "classnames";
import { Tag } from "../Tag/Tag";
// TODO 增加onChange和onVisibleChange方法，当选择的数据更改时，通过回调函数传递给用户
export var Select = function (props) {
    var options = props.options, defaultOptions = props.defaultOptions, mode = props.mode, placeholder = props.placeholder, width = props.width;
    // 选项数组
    var _a = useState([]), selectOptions = _a[0], setSelectOption = _a[1];
    // 是否显示选项列表
    var _b = useState(false), showList = _b[0], setShowList = _b[1];
    // 输入框中的值
    var _c = useState(""), selectValue = _c[0], setSelectValue = _c[1];
    // 将options数组类型处理成optionType 数组类型
    useEffect(function () {
        var optionTypeArr = options.map(function (opt) {
            var iOpt = { value: opt, selected: false };
            if (mode === "single" && typeof defaultOptions === "string") {
                if (opt === defaultOptions) {
                    iOpt.selected = true;
                }
            }
            else if (mode === "single" && typeof defaultOptions !== "string") {
                console.error("defaultOptions must be a string value when mode is single");
            }
            else if (mode === "multiple" && Array.isArray(defaultOptions)) {
                if (defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.includes(opt)) {
                    iOpt.selected = true;
                }
            }
            else {
                if (opt === defaultOptions) {
                    iOpt.selected = true;
                }
            }
            return iOpt;
        });
        setSelectOption(optionTypeArr);
    }, [defaultOptions, mode, options]);
    // 根据selectOptions的值动态改变input的值
    useEffect(function () {
        var str = selectOptions.filter(function (opt) { return opt.selected; }).map(function (opt) { return opt.value; }).join(" ");
        setSelectValue(str);
    }, [selectOptions, selectValue]);
    // 点击配置选将其设为选则/未选择状态
    var handleClickItem = function (index) {
        // 更新options的状态
        setSelectOption(function (prevOptions) { return prevOptions.map(function (opt, i) {
            // mode为single模式下，将其他的选项状态变为未选择状态
            if (mode === "single" && i !== index) {
                opt.selected = false;
            }
            else if (i === index) {
                opt.selected = !opt.selected;
            }
            return opt;
        }); });
        // mode为single模式下，关闭选项列表
        if (mode === "single") {
            setShowList(false);
        }
    };
    // 点击tag的关闭按钮，去除该选项
    var handleClickClose = function (value) {
        setSelectOption(function (preOptions) { return preOptions.map(function (opt) {
            if (opt.value === value) {
                opt.selected = false;
            }
            return opt;
        }); });
    };
    var renderDropDown = function () {
        return _jsx("ul", __assign({ className: "select-list" }, { children: selectOptions.map(function (opt, index) {
                var classes = classnames("select-item", {
                    "is-selected": opt.selected
                });
                return (_jsxs("li", __assign({ className: classes, onClick: function () { return handleClickItem(index); } }, { children: [opt.value, opt.selected && _jsx(Icon, { icon: "check" }, void 0)] }), index));
            }) }), void 0);
    };
    var renderText = function () {
        if (!selectValue) {
            return _jsx("span", { children: placeholder }, void 0);
        }
        if (mode === "multiple") {
            var selectedOptions = selectOptions.filter(function (opt) { return opt.selected; });
            return selectedOptions.map(function (opt, index) {
                return (_jsx(Tag, __assign({ type: "primary", closeable: true, onCloseClick: function () { return handleClickClose(opt.value); } }, { children: opt.value }), index));
            });
        }
        else {
            return _jsx("span", { children: selectValue }, void 0);
        }
    };
    return (_jsxs("div", __assign({ className: "bull-select-wrapper", style: { width: width } }, { children: [_jsxs("div", __assign({ className: "select-text-wrapper" }, { children: [_jsx("span", __assign({ className: "select-text" }, { children: renderText() }), void 0), _jsx("div", __assign({ className: "arrow-icon" }, { children: _jsx(Icon, { icon: showList ? "angle-up" : "angle-down", onClick: function () { return setShowList(!showList); } }, void 0) }), void 0)] }), void 0), showList && renderDropDown()] }), void 0));
};
Select.defaultProps = {
    mode: "single"
};
