import { Button, Form, Input, Modal, Select, Table } from "antd";
import React from "react";
import { ActiveModalContext } from "../Context/ActiveModal";
import { useSelector } from "react-redux";
import { StudentsFilter } from "../redux/selector";
import FormItem from "antd/es/form/FormItem";
import { AppContext } from "../Context/AppContext";


const AddSubjectModal = () => {
  const {isAddClassSubjectModal,setIsAddClassSubjectModal} = React.useContext(ActiveModalContext)
  const {teachers,columns} = React.useContext(AppContext)
  const listStudent = useSelector(StudentsFilter);
  // console.log(teachers)
  const [form] = Form.useForm()
  const onCancel = () => {
    setIsAddClassSubjectModal(false);
  };
  const onFinish = ()=>{
    const FormValue = form.getFieldValue()
    console.log(FormValue)
  }
  return (
    <Modal onCancel={onCancel} footer={null} width={700} open={isAddClassSubjectModal}>
      <Form form={form} onFinish={onFinish} className="pt-10 px-5">
        <Form.Item
          rules={[{ required: true, message: "please input your Class Name" }]}
          name="Ten_Lop"
          label={<p className="w-32 text-left">Tên Lớp</p>}
        >
          <Input variant="filled" style={{width:"90%"}} placeholder="Nhập Tên Lớp" />
        </Form.Item>
        <Form.Item
          name="teacher"
          label={<p className="w-32 text-left">Choose Teacher</p>}
          rules={[{ required: true, message: "please choose a teacher" }]}
        >
          <Select
            showSearch
            mode="tags"
            optionFilterProp="name_Khoa"
            placeholder="Choose Teacher"
            style={{width:"90%"}}
            options={teachers.map((item) => ({
              value: item?.id_Teacher,
              label: item?.fullName,
            }))}
          />
        </Form.Item>
        <FormItem>
          <Table columns={columns} />
        </FormItem>
        <FormItem> <Button htmlType="submit">Dong y</Button></FormItem>
      </Form>
    </Modal>
  );
};

export default AddSubjectModal;
