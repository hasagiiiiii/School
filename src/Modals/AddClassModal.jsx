import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";
import { AppContext } from "../Context/AppContext";

const AddClassModal = () => {
  const { isOpenFormAddClass, teachers, khoa, setIsOpenFormAddCLass } =
    React.useContext(AppContext);
  const [form] = Form.useForm();
  const onFinish = () => {
    const FormValue = form.getFieldValue();
    // dispatch(ClassReducer.actions.addClass({ ...FormValue, listMonHoc: [] }));
  };
  const handleCancel = () => {
    form.resetFields();
    setIsOpenFormAddCLass(false);
  };
  
  return (
    <Modal
      title="Login"
      onCancel={handleCancel}
      open={isOpenFormAddClass}
      footer={null}
      width={1000}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          rules={[{ required: true, message: "please input your Class Name" }]}
          label={<p className="w-24 text-left">ClassName</p>}
          name="name_ClassSchool"
        >
          <Input placeholder="Class Name" variant="filled" />
        </Form.Item>
        {/* <Form.Item
          rules={[{ required: true, message: "please input your Class Name" }]}
          label="ClassName"
          name="name_Khoa"
        >
          <Select
            showSearch
            mode="tags"
            optionFilterProp="name_Khoa"
            placeholder="Choose Teacher"
            options={khoa.map((item) => ({
              value: item.ma_Khoa,
              label: item.name_Khoa,
            }))}
          />
        </Form.Item> */}
        <Form.Item
          rules={[{ required: true, message: "Please choose your Teacher Name" }]}
          label={<p className="w-24 text-left">Teacher</p>}
          name="teacher"
        >
          <Select
            showSearch
            mode="tags"
            optionFilterProp="user_Name"
            placeholder="Choose Teacher"
            options={teachers?.map((item) => ({
              value: item?.user_Name,
              label: item?.user_Name,
            }))}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="w-32">
            ADD
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddClassModal;
