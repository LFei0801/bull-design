import {Modal, ModalProps} from "../components/Modal/modal";
import { ComponentMeta} from '@storybook/react'
import {useState} from "react";
import {Button} from "../components/Button/button";

export default {
  title : "Modal",
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

export const DIYModal = (args : ModalProps) => {
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
      >
        Open Modal which have different title okText and cancelText
      </Button>
      <Modal
        {...args}
        title={"Your title"}
        visible={visible}
        closable
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        okText={"your confirm text"}
        cancelText={"your cancel text"}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export const NoFooterModal = (args : ModalProps) => {
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
      >
        open modal which not have footer
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