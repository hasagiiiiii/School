import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { AppContext } from "../Context/AppContext";
import { useDispatch } from "react-redux";
import LoginReducer from "../redux/LoginReducer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const LoginModal = () => {
  const [form] = Form.useForm();
  const { open, setOpen } = React.useContext(AppContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {setLogin} = React.useContext(AuthContext)
  const handleLogin = async () => {
    try {
      await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getFieldValue()),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          document.cookie = `access_token = ${data.access_Token};Max-Age=600`;
          document.cookie = 'Dovantrung = 200asgdDSBDHJKASD'
          window.localStorage.setItem("acces", JSON.stringify(data));
          window.location.reload();
          setLogin(true)
          return dispatch(LoginReducer.actions.login(data));
        });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    form.resetFields();
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Login"
      width={500}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        onFinish={handleLogin}
        autoComplete="on"
        className="pt-7 m-auto"
        form={form}
      >
        <Form.Item
          label="UserName"
          rules={[{ required: true, message: "please input your username" }]}
          name="user_Name"
        >
          <Input placeholder="UserName" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "please input your username" }]}
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

export default LoginModal;
