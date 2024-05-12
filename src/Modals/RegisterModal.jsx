import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { ActiveModalContext } from "../Context/ActiveModal";

export const RegisterModal = () => {
  const [form] = Form.useForm();
  const { isOpenRegister, setIsOpenRegister } =
    React.useContext(ActiveModalContext);
  const hanldeFinish = () => {
    console.log(form.getFieldValue());
  };

  return (
    <Modal
      title="Register"
      width={500}
      open={isOpenRegister}
      onCancel={() => setIsOpenRegister(false)}
      footer={null}
    >
      <Form
        onFinish={hanldeFinish}
        autoComplete="on"
        className="pt-7 m-auto"
        form={form}
      >
        <div className="flex">
            <Form.Item>

            </Form.Item>
        </div>
        <Form.Item
          hasFeedback
          label="UserName"
          validateDebounce={1000}
          validateTrigger="onBlur"
          rules={[
            { required: true, message: "Vui lòng nhập UserName" },
            { min: 10, message: "UserName phải có ít nhất 10 ký tự" },
            { max: 20, message: "UserName không được vượt quá 20 ký tự" },
          ]}
          name="user_Name"
        >
          <Input placeholder="UserName" />
        </Form.Item>
        <Form.Item
          hasFeedback
          rules={[{ required: true, message: "please input your username" },{ pattern: /^(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?\/\\\-])/,
          message: 'Mật khẩu không được chứa ký tự đặc biệt'}]}
          label="Password"
          name="user_Password"
        >
          <Input placeholder="Password" type="password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="w-32">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
