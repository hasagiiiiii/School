import { Button, Form, Input, Modal, Table } from "antd";
import React from "react";
import { AppContext } from "../Context/AppContext";
import { ActiveModalContext } from "../Context/ActiveModal";
import { useSelector } from "react-redux";
import { StudentsFilter } from "../redux/selector";
import {DebounceSelect} from "../api/DebounceSelect";
import { FETCH_API_Class } from "../api/FetchAPIClass";
import { AuthContext } from "../Context/AuthProvider";

const AddClassModal = () => {
  const { teachers,columns } = React.useContext(AppContext);
  const { isOpenAddClassModal, setIsOpenAddClassModal } =
    React.useContext(ActiveModalContext);
  const listStudent = useSelector(StudentsFilter);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [teacherSelectedUpdate,setTeacherSelectedUpdate] = React.useState([])
  const [form] = Form.useForm();
  const {setLoading} = React.useContext(AuthContext)
  const onFinish = () => {
    const FormValue = form.getFieldValue();
    const converStudent =selectedRowKeys.map(student =>({id_Student : student}))
    FETCH_API_Class.AddClass({...FormValue,id_Teacher : FormValue.id_Teacher[0].value,student:[...converStudent]})
    form.resetFields()
    setLoading(true)
    setSelectedRowKeys([])
    setIsOpenAddClassModal(false)
  };
  const handleCancel = () => {
    form.resetFields();
    setIsOpenAddClassModal(false);
  };

  //<-----------------------Bắt Đầu Lọc Giáo Viên ----------------------------->//
  const fetchUserList = async (valueSearch, currentTeacher) => {
  
    const FillterSearch = currentTeacher.filter((teacher) =>
    teacher.user_Name.includes(valueSearch)
    ); // Fillter Search xem có người dùng nào giống không
    const TeacherFIll =FillterSearch?.map((teacher) => ({
      label: teacher.fullName,
      value: teacher.id_Teacher,
      photoURL: teacher?.photoURL,
    })) // Map arr có người dùng giống với yêu cầu trong state ra và lọc tránh trùng vói người đã có trong lớp
    
   return TeacherFIll
  };
  //<-----------------------Kết Thúc Lọc Giáo Viên ----------------------------->//
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Modal
      title="Add Class"
      onCancel={handleCancel}
      open={isOpenAddClassModal}
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
        <Form.Item
          rules={[
            { required: true, message: "Please choose your Teacher Name" },
          ]}
          label={<p className="w-24 text-left">Teacher</p>}
          name="id_Teacher"
        >
          {/* <Select
            showSearch
            mode="tags"
            optionFilterProp="user_Name"
            placeholder="Choose Teacher"
            options={teachers?.map((item) => ({
              value: item?.user_Name,
              label: item?.user_Name,
            }))}
          /> */}
          <DebounceSelect
            mode = "multiple"
            // label = "Giáo Viên"
            value={teacherSelectedUpdate}
            fetchOption={(value)=>fetchUserList(value,teachers)}
            onChange={newValue=> setTeacherSelectedUpdate(newValue)}
            // currentTeacher = {teachers}
          />
        </Form.Item>
        <Form.Item>
          <Table 
          rowSelection={rowSelection}
          columns={columns}
          size="small"
          dataSource={listStudent?.map((student)=>({
            ...student,
            key:student.id_Student
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
