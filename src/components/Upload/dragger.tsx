/**
 * 文本拖拽上传
 */
import {FC, useState, DragEvent} from "react";
import classnames from "classnames";

export interface DraggerProps {
  onFile : (file : FileList) => void
}

export const Dragger : FC<DraggerProps> = ({onFile,children}) => {
  const [dragover,setDragover] = useState(false)
  const classes = classnames("bull-uploader-dragger", {
    "is-dragover" : dragover
  })

  const handleDrop = (e : DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragover(false)
    onFile(e.dataTransfer.files)
  }

  const handleDrag = (e : DragEvent<HTMLElement>, over : boolean) => {
    e.preventDefault()
    setDragover(over)
  }

  return (
    <div className={classes}
      onDragOver={e => handleDrag(e,true)}
      onDragLeave={e => handleDrag(e,false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}