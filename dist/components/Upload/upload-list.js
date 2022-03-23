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
import { Icon } from "../Icon/icon";
import { Progress } from "../Progress/progress";
export var UploadList = function (_a) {
    var fileList = _a.fileList, onRemove = _a.onRemove;
    return (_jsx("ul", __assign({ className: "bull-upload-list" }, { children: fileList.map(function (_file) {
            return (_jsxs("li", __assign({ className: "bull-upload-list-item" }, { children: [_jsxs("span", __assign({ className: "file-name file-name-".concat(_file.status) }, { children: [_jsx(Icon, { icon: "file-alt" }, void 0), _jsx("span", __assign({ className: "file-text" }, { children: _file.name }), void 0)] }), void 0), _jsxs("span", __assign({ className: "file-status" }, { children: [_file.status === "uploading" && _jsx(Icon, { icon: "spinner", theme: "primary", spin: true }, void 0), _file.status === "success" && _jsx(Icon, { icon: "check-circle", theme: "success" }, void 0), _file.status === "error" && _jsx(Icon, { icon: "times-circle", theme: "danger" }, void 0)] }), void 0), _jsx("span", __assign({ className: "file-action" }, { children: _jsx(Icon, { icon: "trash", theme: "danger", onClick: function () { return onRemove === null || onRemove === void 0 ? void 0 : onRemove(_file); } }, void 0) }), void 0), _file.status === "uploading"
                        && _jsx(Progress, { percentage: _file.percentage || 0, strokeHeight: "15" }, void 0)] }), _file.uid));
        }) }), void 0));
};
