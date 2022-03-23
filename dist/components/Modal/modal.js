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
import { Button } from "../Button/button";
import { Transition } from "../Transition/transition";
// Todo 支持点击Mask关闭Modal框
export var Modal = function (props) {
    var title = props.title, onOk = props.onOk, onCancel = props.onCancel, okText = props.okText, cancelText = props.cancelText, closable = props.closable, style = props.style, visible = props.visible, className = props.className, children = props.children, footer = props.footer;
    var handleOk = function () {
        if (onOk) {
            onOk();
        }
    };
    var handleCancel = function () {
        if (onCancel) {
            onCancel();
        }
    };
    var generateFoot = function () {
        if (footer) {
            return (_jsx("div", __assign({ className: "modal-footer" }, { children: footer }), void 0));
        }
        else if (footer === undefined) {
            return (_jsxs("div", __assign({ className: "modal-footer" }, { children: [_jsx(Button, __assign({ onClick: handleCancel }, { children: cancelText }), void 0), _jsx(Button, __assign({ btnType: "primary", onClick: handleOk, style: { marginLeft: ".5rem" } }, { children: okText }), void 0)] }), void 0));
        }
        else {
            return null;
        }
    };
    if (!visible) {
        return null;
    }
    return (_jsxs("div", __assign({ className: "modal-container" }, { children: [_jsx("div", { className: "modal-mask" }, void 0), _jsx("div", __assign({ className: "bull-modal-wrap" }, { children: _jsx(Transition, __assign({ in: visible, timeout: 1000, animation: "zoom-in-top" }, { children: _jsxs("div", __assign({ className: "bull-modal ".concat(className), style: style }, { children: [_jsxs("div", __assign({ className: "model-header" }, { children: [_jsx("div", __assign({ className: "modal-title" }, { children: title }), void 0), closable ?
                                        _jsx(Icon, { className: "model-close-icon", size: "lg", icon: "times", theme: "secondary", onClick: handleCancel }, void 0)
                                        : null] }), void 0), _jsx("div", __assign({ className: "modal-content" }, { children: children }), void 0), generateFoot()] }), void 0) }), void 0) }), void 0)] }), void 0));
};
Modal.defaultProps = {
    visible: false,
    closable: true,
    title: "Modal",
    okText: "确定",
    cancelText: "取消",
};
