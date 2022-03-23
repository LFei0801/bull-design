import { useEffect } from "react";
export default function useClickOutSide(ref, callback) {
    useEffect(function () {
        var handleMouse = function (e) {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            callback(e);
        };
        document.addEventListener("click", handleMouse);
        return function () { return document.removeEventListener("click", handleMouse); };
    }, [ref, callback]);
}
