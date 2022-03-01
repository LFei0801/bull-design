import { render } from "@testing-library/react";
import {Alert,AlertProps} from "./alert";

const defaultAlertProps : AlertProps = {
  visible : true,
  title : "default alert title",
  closeable : true,
}

describe("Alert Component test",() => {
  it("should correct show the Alert component when the visible and closeable set to true",() => {
    const view = render(<Alert {...defaultAlertProps}>default alert message</Alert>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const messageElement = view.getByText("default alert message")
    expect(messageElement).toBeInTheDocument()
    expect(messageElement.tagName).toEqual("P")
    expect(messageElement).toHaveClass("alert-message")
    // eslint-disable-next-line testing-library/no-node-access
    expect(messageElement.parentNode).toHaveClass("alert alert-primary show")

    // @ts-ignore
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const titleElement = view.getByText(defaultAlertProps.title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toEqual("H4")
    expect(titleElement).toHaveClass("alert-title")
    // eslint-disable-next-line testing-library/no-node-access
    expect(titleElement.parentNode).toHaveClass("alert alert-primary show")


    // 关闭u按钮正常显示
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const iconElement = view.getByText("关闭")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass("alert-close-icon")
    // eslint-disable-next-line testing-library/no-node-access
    expect(iconElement.parentNode).toHaveClass("alert alert-primary show")
  })
})