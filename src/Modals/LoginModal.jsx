import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import AuthReducer from "../redux/AuthReducer";
import LoginReducer from "../redux/LoginReducer";
import { ActiveModalContext } from "../Context/ActiveModal";
import { addDocument } from "../Firebase/serviceFireStore";
import useFireStore from "../Firebase/useFireStore";
const LoginModal = () => {
  const [form] = Form.useForm();
  const { setLoading } = React.useContext(AuthContext);
  const { isOpenLogin, setIsOpenLogin } = React.useContext(ActiveModalContext);
  const [UserName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Condition call fireStore 
  const Condition = React.useMemo(
    () => ({
      fieldName: "user_Name",
      operator: "==",
      compareValue: UserName,
    }),
    [UserName]
  );
  const query = useFireStore("users", Condition);

  
  const handleLogin = async () => {
    try {
      await fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getFieldValue()),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(AuthReducer.actions.setLogin(true));
          dispatch(LoginReducer.actions.login(data));
          if(query === null || query.length ===0){
            addDocument("users", data);
          }
          setLoading(true);
        });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    form.resetFields();
    setIsOpenLogin(false);
  };
  const handleCancel = () => {
    setIsOpenLogin(false);
    form.resetFields();
  };
  return (
    <Modal
      title="Login"
      width={500}
      open={isOpenLogin}
      onOk={() => setIsOpenLogin(false)}
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
          <Input
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
          />
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
