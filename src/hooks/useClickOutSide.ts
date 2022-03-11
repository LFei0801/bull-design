import {RefObject, useEffect} from "react";

export default function useClickOutSide(ref : RefObject<HTMLElement>, callback:Function){
  useEffect(() => {
    const handleMouse = (e:MouseEvent) => {
      if(!ref.current || ref.current.contains(e.target as HTMLElement)){
        return
      }
      callback(e)
    }

    document.addEventListener("click",handleMouse)
    return () => document.removeEventListener("click",handleMouse)
  },[ref,callback])
}