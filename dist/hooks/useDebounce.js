/**
 * 防抖
 */
import { useEffect, useState } from "react";
export default function useDebounce(initValue, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(initValue), value = _a[0], setValue = _a[1];
    useEffect(function () {
        var timer = setTimeout(function () { return setValue(initValue); }, delay);
        return function () { return clearTimeout(timer); };
    }, [initValue, delay]);
    return value;
}
