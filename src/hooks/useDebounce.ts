/**
 * 防抖
 */
import {useEffect, useState} from "react";

export default function useDebounce<T>(initValue:T, delay : number = 300) {
  const [value,setValue] = useState<T>(initValue)
  
  useEffect(() => {
    const timer = setTimeout(() => setValue(initValue),delay)
    return () => clearTimeout(timer)
  },[initValue, delay])

  return value
} 