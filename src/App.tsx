import {ChangeEvent} from "react";
import axios from "axios";

export default function App() {
  const  handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(files) {
      const uploadFile = files[0]
      const formData = new FormData()
      formData.append(uploadFile.name, uploadFile)
      axios.post("https://jsonplaceholder.typicode.com/posts",formData, {
        headers : {
          'Content-type' : "multipart/form-data"
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }

  return (
    <>
      <form method={"post"} encType={"multipart/form-data"} action={"http://server.com"}>
        <input type={"file"} name={"myFile"} onChange={handleChange}/>
      </form>
    </>
  )
}