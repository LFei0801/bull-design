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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { UploadList } from "./upload-list";
import axios from "axios";
import { Dragger } from "./dragger";
export var Upload = function (props) {
    var action = props.action, onError = props.onError, onSuccess = props.onSuccess, onProgress = props.onProgress, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove, defaultUploadFileList = props.defaultUploadFileList, headers = props.headers, data = props.data, name = props.name, withCredentials = props.withCredentials, multiple = props.multiple, accept = props.accept, drag = props.drag, children = props.children;
    var inputRef = useRef(null);
    // 渲染的文件列表
    var _a = useState(defaultUploadFileList || []), fileList = _a[0], setFileList = _a[1];
    // useEffect(() => {
    //   console.log(fileList)
    // },[fileList])
    // 点击按钮时，触发input框点击事件
    var handleClick = function () {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };
    // 文件框点击事件
    var handleUpload = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        uploadFiles(files);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };
    /**
     * 更新 fileList中某一项的状态
     */
    var updateFileList = function (uploadFile, updateObj) {
        setFileList(function (prevList) { return prevList.map(function (file) {
            if (file.uid === uploadFile.uid) {
                return __assign(__assign({}, file), updateObj);
            }
            return file;
        }); });
    };
    /**
     * 上传文件
     */
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (beforeUpload) {
                var result = beforeUpload(file);
                // 如果是promise
                if (result && result instanceof Promise) {
                    result.then(function (file) { return post(file); });
                }
                // 不是promise 且检查通过
                else if (result) {
                    post(file);
                }
            }
            else {
                post(file);
            }
        });
    };
    // 上传单个文件
    var post = function (file) {
        var _file = {
            uid: Date.now() + "file",
            name: file.name,
            size: file.size,
            raw: file,
            percentage: 0,
            status: "ready"
        };
        // setFileList([...fileList,_file])
        setFileList(function (prevList) { return __spreadArray(__spreadArray([], prevList, true), [_file], false); });
        var formData = new FormData();
        // 自定义发送到后台的数据名称
        formData.append(name || "file", file);
        // 添加发送到后台的额外数据
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { "Content-Type": "multipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (percentage < 100) {
                    // 更新fileList
                    updateFileList(_file, { percentage: percentage, status: "uploading" });
                    if (onProgress) {
                        onProgress(percentage, _file);
                    }
                }
            }
        }).then(function (res) {
            updateFileList(_file, {
                status: "success",
                response: res,
                percentage: 100,
            });
            if (onSuccess) {
                onSuccess(res.data, _file);
            }
            if (onChange) {
                onChange(res.data, _file);
            }
        }).catch(function (err) {
            console.error(err.message);
            updateFileList(_file, {
                status: "error",
                error: err
            });
            if (onError) {
                onError(err, _file);
            }
            if (onChange) {
                onChange(err, _file);
            }
        });
    };
    // 删除文件列表中的文件数据
    var handleRemove = function (file) {
        setFileList(function (prevList) { return prevList.filter(function (_file) { return _file.uid !== file.uid; }); });
        if (onRemove) {
            onRemove(file);
        }
    };
    return (_jsxs("div", __assign({ className: "bull-upload-wrapper" }, { children: [_jsxs("div", __assign({ className: "bull-upload-inner", onClick: handleClick }, { children: [drag ? _jsx(Dragger, __assign({ onFile: function (files) { return uploadFiles(files); } }, { children: children }), void 0) : children, _jsx("input", { style: { display: "none" }, type: "file", ref: inputRef, onChange: handleUpload, multiple: multiple, accept: accept }, void 0)] }), void 0), _jsx(UploadList, { fileList: fileList, onRemove: handleRemove }, void 0)] }), void 0));
};
Upload.defaultProps = {
    name: "file",
    multiple: false,
};
