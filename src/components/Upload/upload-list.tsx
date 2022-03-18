/**
 * 上传的文件列表
 */
import {UploadFileType} from "./upload";
import {FC} from "react";
import {Icon} from "../Icon/icon";

export interface UploadListProps {
  fileList : UploadFileType[]
  onRemove ?: (_file : UploadFileType) => void
}

export const UploadList : FC<UploadListProps> = ({fileList,onRemove}) => {
  return (
    <ul className={"bull-upload-list"}>
      {
        fileList.map(_file => {
          return (
            <li className={"bull-upload-list-item"} key={_file.uid}>
              <span className={`file-name file-name-${_file.status}`}>
                <Icon icon={"file-alt"}/>
                {_file.name}
              </span>
              <span className={"file-status"}>
                {_file.status === "uploading" && <Icon icon={"spinner"} theme={"primary"} spin />}
                {_file.status === "success" && <Icon icon={"check-circle"} theme={"success"}/>}
                {_file.status === "error" && <Icon icon={"times-circle"} theme={"danger"}/>}
              </span>
              <span className={"file-action"}>
                <Icon
                  icon={"times"}
                  theme={"secondary"}
                  onClick={() => onRemove?.(_file)}
                />
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}