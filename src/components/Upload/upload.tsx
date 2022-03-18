import {ChangeEvent, FC, useRef, useState} from "react";
import {Button} from "../Button/button";
import axios from "axios";
import {UploadList} from "./upload-list";

export type UploadFileType = {
  uid : string
  name : string
  size ?: number
  status ?: "ready" | "success" | 'error' | "uploading"
  percentage ?: number
  raw ?: File
  response ?: any
  error ?: any
}

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
  /**
   * 初始的上传文件列表
   */
  defaultUploadFileList ?: UploadFileType[]
  /**
   * 删除文件的回调函数
   */
  onRemove ?: (_file : UploadFileType) => void
}

export const Upload : FC<UploadProps> = props => {
  const {
    action,
    onError,
    onSuccess,
    onProgress,
    beforeUpload,
    onChange,
    text,
    onRemove,
    defaultUploadFileList
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  // 渲染的文件列表
  const [fileList, setFileList] = useState<UploadFileType[]>(defaultUploadFileList || [])

  // useEffect(() => {
  //   console.log(fileList)
  // },[fileList])

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
   * 更新 fileList中某一项的状态
   */
  const updateFileList = (uploadFile : UploadFileType, updateObj : Partial<UploadFileType>) => {
    setFileList(prevList => prevList.map(file => {
      if(file.uid === uploadFile.uid) {
        return {...file,...updateObj}
      }
      return file
    }))
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
    const _file : UploadFileType = {
      uid : Date.now() + "file",
      name: file.name,
      size : file.size,
      raw : file,
      percentage : 0,
      status : "ready"
    }
    setFileList([...fileList,_file])
    const formData = new FormData()
    formData.append(file.name,file)
    axios.post(action, formData, {
      headers : {
        "Content-Type" : "multipart/form-data"
      },
      onUploadProgress : e => {
        const percentage = Math.round((e.loaded * 100 ) / e.total) || 0
        if(percentage < 100) {
          // 更新fileList
          updateFileList(_file,{percentage, status : "uploading"})
          if(onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(res => {
      updateFileList(_file, {
        status : "success",
        response : res,
        percentage : 100,
      })
      if(onSuccess) {
        onSuccess(res.data, file)
      }
      if(onChange) {
        onChange(res.data, file)
      }
    }).catch(err => {
      console.error(err.message)
      updateFileList(_file, {
        status : "error",
        error : err
      })
      if(onError) {
        onError(err,file)
      }
      if(onChange) {
        onChange(err, file)
      }
    })
  }

  // 删除文件列表中的文件数据
  const handleRemove = (file : UploadFileType) => {
    setFileList(prevList => prevList.filter(_file => _file.uid !== file.uid))
    if(onRemove) {
      onRemove(file)
    }
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
      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}