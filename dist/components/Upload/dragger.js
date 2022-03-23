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
/**
 * 文本拖拽上传
 */
import { useState } from "react";
import classnames from "classnames";
export var Dragger = function (_a) {
    var onFile = _a.onFile, children = _a.children;
    var _b = useState(false), dragover = _b[0], setDragover = _b[1];
    var classes = classnames("bull-uploader-dragger", {
        "is-dragover": dragover
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setDragover(false);
        onFile(e.dataTransfer.files);
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragover(over);
    };
    return (_jsx("div", __assign({ className: classes, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); }, onDrop: handleDrop }, { children: children }), void 0));
};
