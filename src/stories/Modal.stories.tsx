import {Modal, ModalProps} from "../components/Modal/modal";
import { ComponentMeta} from '@storybook/react'
import {useState} from "react";
import {Button} from "../components/Button/button";

export default {
  title : "Component/Modal",
  component : Modal
} as ComponentMeta<typeof Modal>

export const defaultModal = (args:ModalProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        btnType={"primary"}
        onClick={() => setVisible(true)}
      >
        Open Modal
      </Button>
      <Modal
        {...args}
        title={"Basis Modal"}
        visible={visible}
        closable
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export const customizedFooter = (args : ModalProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
      >
        open modal with customized Footer
      </Button>
      <Modal
        {...args}
        title={"Your title"}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={
          <>
            <Button key="back" onClick={() => setVisible(false)}>
              Return
            </Button>
            <Button
              btnType={"primary"}
              onClick={() => setVisible(false)}
              style={{marginLeft : '1rem'}}
            >
              Submit
            </Button>
            <Button
              btnType={"link"}
              href={"https://www.baidu.com"}
            >
              Search on Baidu
            </Button>
          </>
        }
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export const NoFooterModal = (args:ModalProps) => {
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
      >
        open modal with not have footer
      </Button>
      <Modal
        {...args}
        title={"Your title"}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}
