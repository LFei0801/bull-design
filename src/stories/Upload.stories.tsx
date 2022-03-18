import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Upload, UploadFileType} from "../components/Upload/upload";
import {action} from "@storybook/addon-actions";
import {Button} from "../components/Button/button";
import {Icon} from "../components/Icon/icon";

export default {
  title : "Upload",
  component : Upload,
  args : {
    action : "https://jsonplaceholder.typicode.com/posts",
    onSuccess : action("success"),
    onProgress : action("progress"),
    onError : action("error"),
    onChange : action("changed"),
  }
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
  {uid : Date.now() + "file0", name : "笔记.md" , status : "uploading",percentage : 40 },
  {uid : Date.now() + "file1", name : "test.md" , status : "success" },
  {uid : Date.now() + "file2", name : "README.md" , status : "error" },
]

const Template : ComponentStory<typeof Upload> = args => <Upload {...args}/>

export const simpleUpload = Template.bind({})
simpleUpload.args = {
  defaultUploadFileList : defaultFileList,
  children : <Button btnType={"primary"}>upload file</Button>
}

export const CheckFileSizeUpload = Template.bind({})
CheckFileSizeUpload.args = {
  beforeUpload : checkFileSize,
  children : <Button btnType={"primary"}>check file size before upload file</Button>
}

export const ChangeFileNameUpload = Template.bind({})
ChangeFileNameUpload.args = {
  beforeUpload : changeFileName,
  children : <Button btnType={"primary"}>change file name after uploaded file</Button>
}

export const designOwnData = Template.bind({})
designOwnData.args = {
  headers : {"X-Power-by" : "bull-design"},
  data : {"form" : "bull-design"},
  multiple : true,
  accept : ".pdf",
  children : <Button btnType={"primary"}>design your file data which upload and support upload multiple files</Button>
}

export const DragUpload = Template.bind({})
DragUpload.args = {
  headers : {"X-Power-by" : "bull-design"},
  data : {"form" : "bull-design"},
  multiple : true,
  accept : ".pdf",
  drag : true,
  children : (
    <>
      <Icon icon={"upload"} size={"5x"} theme={"primary"}/>
      <p style={{ marginTop : "10px"}}>拖拽文件或者点击此区域上传文件</p>
    </>
  )
}




