import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Upload, UploadFileType} from "../components/Upload/upload";
import {action} from "@storybook/addon-actions";

export default {
  title : "Upload",
  component : Upload
} as ComponentMeta<typeof Upload>

const checkFileSize = (file : File) => {
  if(Math.round(file.size / 1024) > 50) {
    alert("文件大小不能超过50kb")
    return false
  }
  return true
}

const changeFileName = (file : File) => {
  const newFile = new File([file], "newFile",{type : file.type})
  return Promise.resolve(newFile)
}

const defaultFileList : UploadFileType[] = [
  {uid : Date.now() + "file0", name : "笔记.md" , status : "uploading" },
  {uid : Date.now() + "file1", name : "test.md" , status : "success" },
  {uid : Date.now() + "file2", name : "README.md" , status : "error" },
]

const Template : ComponentStory<typeof Upload> = args => <Upload {...args}/>

export const simpleUpload = Template.bind({})
simpleUpload.args = {
  action : "https://jsonplaceholder.typicode.com/posts",
  onSuccess : action("success"),
  onProgress : action("progress"),
  onError : action("error"),
  onChange : action("changed"),
  defaultUploadFileList : defaultFileList
}

export const CheckFileSizeUpload = Template.bind({})
CheckFileSizeUpload.args = {
  text : "check file size before upload file",
  action : "https://jsonplaceholder.typicode.com/posts",
  onSuccess : action("success"),
  onProgress : action("progress"),
  onError : action("error"),
  onChange : action("changed"),
  beforeUpload : checkFileSize
}

export const ChangeFileNameUpload = Template.bind({})
ChangeFileNameUpload.args = {
  text : "change file name after uploaded file",
  action : "https://jsonplaceholder.typicode.com/posts",
  onSuccess : action("success"),
  onProgress : action("progress"),
  onError : action("error"),
  onChange : action("changed"),
  beforeUpload : changeFileName
}




