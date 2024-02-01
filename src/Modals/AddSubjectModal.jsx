import { Form, Input, Modal, Select, message } from "antd";
import React, { useMemo } from "react";
import { AppContext } from "../Context/AppContext";

const AddSubjectModal = () => {
  const { isOpenSubjectClass, setIsOpenSubjectClass } =
    React.useContext(AppContext);

  const onCancel = () => {
    setIsOpenSubjectClass(false);
  };

  return (
    <Modal onCancel={onCancel} footer={null} open={isOpenSubjectClass}>
      <Form>
        <Form.Item
          rules={[{ required: true, message: "please input your Class Name" }]}
          name=""
          label="Tên Lớp"
        >
          <Input placeholder="Nhập Tên Lớp" />
        </Form.Item>
        <Form.Item
          label="Class"
          rules={[{ required: true, message: "please choose a class" }]}
        ></Form.Item>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSubjectModal;
