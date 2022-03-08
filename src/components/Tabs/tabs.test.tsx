import {fireEvent, cleanup, RenderResult, render} from '@testing-library/react'
import {Tabs,TabsProps} from "./tabs";
import {TabItem} from "./tabs-item";

const lineProps : TabsProps = {
  mode : "line",
  onSelect : jest.fn(),
  className : "test"
}

const cardProps : TabsProps = {
  mode : "card",
  onSelect : jest.fn()
}

const generateTabs = (props : TabsProps) => {
  return (
    <Tabs {...props}>
      <TabItem label={"tab1"}>
        active
      </TabItem>
      <TabItem label={"tab2"}>
        second
      </TabItem>
      <TabItem label={"tab3"} disabled>
        disabled
      </TabItem>
    </Tabs>
  )
}

let screen : RenderResult,
   tabsElement : HTMLElement,
   activeElementContent : HTMLElement,
   activeElementLabel : HTMLElement,
   disabledElementContent : HTMLElement,
   disabledElementLabel : HTMLElement

describe("test Tabs and TabItem Component",() => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    screen = render(generateTabs(lineProps))
    tabsElement = screen.getByTestId("test")
    activeElementLabel = screen.getByText("tab1")
    activeElementContent = screen.getByText("active")
    disabledElementLabel = screen.getByText("tab3")
    disabledElementContent = screen.getByText("disabled")
  })

  it("should be render correct Tabs and TabItem in the lineProps",() => {
    expect(tabsElement).toBeInTheDocument()
    expect(tabsElement).toHaveClass("tabs-line test")

    expect(activeElementLabel).not.toHaveClass("tabs-label-disabled")
    expect(activeElementLabel).toHaveClass("tabs-label tabs-label-active")
    expect(activeElementContent).toHaveClass("tabs-content-active tabs-content")

    expect(disabledElementLabel).toHaveClass("tabs-label-disabled")
    expect(disabledElementLabel).not.toHaveClass("tabs-label-active")
    expect(disabledElementContent).not.toHaveClass("tabs-content-active")

    // 测试行为
    fireEvent.click(disabledElementLabel)
    expect(disabledElementLabel).not.toHaveClass("tabs-label-active")
    expect(disabledElementContent).not.toHaveClass("tabs-content-active")
    expect(lineProps.onSelect).not.toHaveBeenCalledWith(2)
  })
  it("should be render correct Tabs and TabItem in the cardProps",() => {
    cleanup()
    screen = render(generateTabs(cardProps))
    const tabsElement = screen.getByTestId("test")
    expect(tabsElement).toHaveClass("tabs-card")

    activeElementLabel = screen.getByText("tab1")
    const secondElementLabel = screen.getByText("tab2")
    activeElementContent = screen.getByText("active")
    const secondElementContent = screen.getByText("second")

    expect(secondElementContent).not.toHaveClass("tabs-content-active")
    expect(secondElementLabel).not.toHaveClass("tabs-label-active")

    fireEvent.click(secondElementLabel)
    expect(activeElementLabel).not.toHaveClass("tabs-label-active")
    expect(activeElementContent).not.toHaveClass("tabs-content-active")
    expect(secondElementContent).toHaveClass("tabs-content-active")
    expect(secondElementLabel).toHaveClass("tabs-label-active")
    expect(cardProps.onSelect).toHaveBeenCalledWith(1)
  })
})