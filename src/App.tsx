import {Button} from "./components/Button/button";
import {useState} from "react";
import {Alert} from "./components/Alert/alert";

export default function App() {
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        btnType={"primary"}
        onClick={() => setVisible(!visible)}
      >
        show Message
      </Button>
      <Alert
        visible={visible}
        closeable
        type={"info"}
        title={"Animate alert Message"}
        onClose={() => setVisible(false)}
      >
        this is the Message
      </Alert>
    </>
  )
}