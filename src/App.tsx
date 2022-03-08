import {Tabs} from "./components/Tabs/tabs";
import {TabItem} from "./components/Tabs/tabs-item";

export default function App() {
  return (
    <>
      <Tabs
        onSelect={(index) => console.log(index)}
        mode={"card"}
      >
        <TabItem label={"card1"}>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabItem>
        <TabItem label={"card2"}>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabItem>
        <TabItem label={"card3"}>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabItem>
        <TabItem label={"card4"}>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
        </TabItem>
      </Tabs>
      <Tabs
        onSelect={(index) => console.log(index)}
        mode={"line"}
      >
        <TabItem label={"card1"}>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabItem>
        <TabItem label={"card2"}>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabItem>
        <TabItem label={"card3"}>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabItem>
        <TabItem label={"card4"}>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
        </TabItem>
      </Tabs>
    </>
  )
}