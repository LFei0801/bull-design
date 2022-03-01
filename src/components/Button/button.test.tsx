import { render, fireEvent } from '@testing-library/react'
import {Button, ButtonProps} from "./button";

const defaultProps = {
  onClick : jest.fn()
}

const testProps : ButtonProps = {
  btnType : "primary",
  size : "lg",
  className : "test-btn"
}

const disabledProps : ButtonProps = {
  disabled : true,
  onClick : jest.fn()
}

describe("test Button component",() => {
  it("should render the correct default Button",() => {
    const view = render(<Button {...defaultProps}>default Button</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = view.getByText("default Button")
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("btn btn-default")
    // 事件点击
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it("should render the correct component based on different props",() => {
    const view = render(<Button {...testProps}>primary Button</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = view.getByText("primary Button")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("btn btn-primary btn-lg test-btn")
  })
  it("should render a link when btnType equal link and href is provided",() => {
    const view = render(<Button
      btnType={"link"}
      href={"http://dummyurl"}
    >
      link button
    </Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = view.getByText("link button")

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("A")
    expect(element).toHaveClass("btn btn-link")
  })
  it("should render a disabled button when disabled set to true",() => {
    const view = render(<Button {...disabledProps}>disabled Button</Button>)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const element = view.getByText("disabled Button")
    expect(element).toBeInTheDocument()
    // @ts-ignore
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
})