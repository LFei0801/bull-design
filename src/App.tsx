import {Button} from "./components/Button/button";
import {Alert} from "./components/Alert/alert";
import {useState} from "react";

export default function App() {
  const [visible,setVisible] = useState<boolean>(false)
  return (
    <>
      <Button
        onClick={() => setVisible(!visible)}>
        default button
      </Button>
      <Alert
        title={"提示标题哦亲"}
        visible={visible}
      >
        this is a alert!
      </Alert>
      <Alert
        type={"dark"}
        title={"提示标题哦亲"}
        closeable
        onClose={() => {
          setVisible(false)
          console.log("close btn clicking")
        }}
        visible={visible}
      >
        this is a alert!
      </Alert>
    </>
  )
}