import {Button} from "./components/Button/button";

export default function App() {
  return (
    <>
      <Button onClick={() => console.log("default button clicked")}>default button</Button>
      <Button size={"lg"} autoFocus>large button</Button>
      <br/>
      <Button btnType={"danger"} >danger button</Button>
      <Button disabled>disable button</Button>
      <br/>
      <Button
        btnType={"link"}
        href={"https://www.baidu.com"}
        onClick={() => console.log("link button active")}
      >
        Baidu link
      </Button>
      <Button btnType={"link"} href={"https://www.baidu.com"} disabled>Baidu link</Button>
    </>
  )
}