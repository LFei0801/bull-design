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
/*
* AutoComplete属性分析
* fetchSuggestions : 根据值发送的筛选逻辑， 支持Promise
* onSelect : 选择某一项时触发的回调
*
* 使用示例
* <AutoComplete
*   fetchSuggestions=(handleChange)
*   onSelect=(handleSelect)
* />
 */
import { useEffect, useState, useRef } from "react";
import { Input } from "../Input/input";
import { Icon } from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import classnames from "classnames";
import useClickOutSide from "../../hooks/useClickOutSide";
import { Transition } from "../Transition/transition";
// TODO 添加测试文件
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, renderOption = props.renderOption, delay = props.delay, restProps = __rest(props, ["fetchSuggestions", "onSelect", "renderOption", "delay"]);
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(-1), highlightIndex = _d[0], setHighlightIndex = _d[1];
    var debounceValue = useDebounce(inputValue, delay);
    var triggeredRef = useRef(false);
    var autoCompleteRef = useRef(null);
    /**
     * 点击外部区域自动关闭建议框
     */
    useClickOutSide(autoCompleteRef, function () {
        setSuggestions([]);
    });
    // 当input value 发生改变时就触发搜索函数
    useEffect(function () {
        if (debounceValue && triggeredRef.current) {
            var result = fetchSuggestions(debounceValue);
            // 返回类型时Promise
            if (result instanceof Promise) {
                // 请求还没有返回时将loading状态设为true
                setLoading(true);
                result.then(function (data) {
                    // 请求完毕将loading状态设为false
                    setLoading(false);
                    setSuggestions(data);
                });
            }
            // 返回类型不是Promise
            else {
                setSuggestions(result);
            }
        }
        else {
            setSuggestions([]);
        }
    }, [debounceValue]);
    // 按下esc时，将高亮取消
    useEffect(function () {
        setHighlightIndex(-1);
    }, [debounceValue]);
    var handleChange = function (e) {
        var value = e.target.value;
        setInputValue(value);
        triggeredRef.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        triggeredRef.current = false;
        if (onSelect) {
            onSelect(item);
        }
    };
    // 设置高亮
    var highlight = function (index) {
        if (index < 0) {
            index = 0;
        }
        else if (index > suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
            // enter
            case 13:
                if (suggestions.length) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            // up arrow
            case 38:
                highlight(highlightIndex - 1);
                break;
            // down arrow
            case 40:
                highlight(highlightIndex + 1);
                break;
            // esc
            case 27:
                setInputValue("");
                setSuggestions([]);
                break;
            default:
                break;
        }
    };
    var renderItem = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropDown = function () {
        return (_jsx(Transition, __assign({ in: suggestions.length !== 0, timeout: 300, animation: "zoom-in-top" }, { children: _jsx("ul", __assign({ className: "suggestion-list" }, { children: suggestions && suggestions.map(function (item, index) {
                    var classes = classnames("suggestion-item", {
                        "is-highlight": index === highlightIndex
                    });
                    return (_jsx("li", __assign({ className: classes, onClick: function () { return handleSelect(item); } }, { children: renderItem(item) }), index));
                }) }), void 0) }), void 0));
    };
    return (_jsxs("div", __assign({ className: "bull-auto-complete", ref: autoCompleteRef }, { children: [_jsx(Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown, icon: "search" }, restProps), void 0), loading && (_jsx(Icon, { className: "suggestion-loading-icon", icon: "spinner", spin: true }, void 0)), suggestions.length !== 0 ? generateDropDown() : null] }), void 0));
};
