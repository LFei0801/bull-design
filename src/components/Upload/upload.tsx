import {ChangeEvent, FC, useRef} from "react";
import {Button} from "../Button/button";
import axios from "axios";

export interface UploadProps {
  /**
   * 上传文件按钮的文本
   */
  text ?: string
  /**
   * 文件上传的地址
   */
  action :  string
  /**
   * 上传过程中的回调
   */
  onProgress ?: (percentage : number, file :File) => void
  /**
   * 文件上传成功的回调
   */
  onSuccess ?: (data : any , file :File) => void
  /**
   * 文件上传失败的回调
   */
  onError ?: (err : any , file :File) => void
  /**
   * 文件上传之前做的一些处理
   */
  beforeUpload ?: (file : File) => boolean | Promise<File>
  /**
   * 文件后的回调函数
   * 成功和失败都会触发
   */
  onChange ?: (data : any, file : File) => void
}

export const Upload : FC<UploadProps> = props => {
  const { action, onError, onSuccess, onProgress, beforeUpload, onChange,text } = props

  const inputRef = useRef<HTMLInputElement>(null)

  // 点击按钮时，触发input框点击事件
  const handleClick = () => {
    if(inputRef.current){
      inputRef.current.click()
    }
  }

  // 文件框点击事件
  const handleUpload = (e:ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) return
    uploadFiles(files)
    if(inputRef.current) {
      inputRef.current.value = ""
    }
  }

  /**
   * 上传文件
   */
  const uploadFiles = (files : FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if(beforeUpload) {
        const result = beforeUpload(file)
        // 如果是promise
        if(result && result instanceof Promise) {
          result.then(file => post(file))
        }
        // 不是promise 且检查通过
        else if(result) {
          post(file)
        }
      }else{
        post(file)
      }
    })
  }

  // 上传单个文件
  const post = (file : File) => {
    const formData = new FormData()
    formData.append(file.name,file)
    axios.post(action, formData, {
      headers : {
        "Content-Type" : "multipart/form-data"
      },
      onUploadProgress : e => {
        const percentage = Math.round((e.loaded * 100 ) / e.total) || 0
        if(onProgress) {
          onProgress(percentage, file)
        }
      }
    }).then(res => {
      if(onSuccess) {
        onSuccess(res.data, file)
      }
      if(onChange) {
        onChange(res.data, file)
      }
    }).catch(err => {
      console.error(err.message)
      if(onError) {
        onError(err,file)
      }
      if(onChange) {
        onChange(err, file)
      }
    })
  }

  return (
    <div className={"bull-upload-wrapper"}>
      <Button btnType={"primary"} onClick={handleClick}>
        {text ? text : "upload file"}
      </Button>
      <input
        style={{display:"none"}}
        type={"file"}
        ref={inputRef}
        onChange={handleUpload}
      />
    </div>
  )
}