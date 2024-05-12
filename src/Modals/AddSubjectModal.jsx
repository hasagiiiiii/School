import { Button, Form, Input, Modal, Select, Table,Space } from "antd";
import React from "react";
import { ActiveModalContext } from "../Context/ActiveModal";
import { useDispatch, useSelector } from "react-redux";
import { StudentsFilter, TyepFillterStudent } from "../redux/selector";
import FormItem from "antd/es/form/FormItem";
import { IoIosSearch } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import FilterSearchStudent from "../redux/SchoolReducer/FilterSearchStudent";

const option =[
  {value:"Class",label:"Class"},
  {value:"user_Name",label:"UserName"},
  {value:"fullName",label:"FullName"},
  {value:"All",label:"All"},
]


const AddSubjectModal = () => {
  const {isAddClassSubjectModal,setIsAddClassSubjectModal} = React.useContext(ActiveModalContext)
  const {teachers,columns} = React.useContext(AppContext)
  const listStudent = useSelector(StudentsFilter);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [form] = Form.useForm()  
  const dispatch = useDispatch()
  const onCancel = () => {
    setIsAddClassSubjectModal(false);
  };
  const onFinish = ()=>{
    const FormValue = form.getFieldValue() // Lay data trong form 
    console.log(FormValue, {...selectedRowKeys})
    setSelectedRowKeys([])
    form.resetFields()
  }
  // const handleOnchangeInput = (value) => {
  //   dispatch(FilterSearchStudent.actions.filterSearchName(value));
  //   setValueInput(value);
  // };

  //
  
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onChangeSelectOption = (value)=>{
    dispatch(FilterSearchStudent.actions.onChangeType(value))
  }

  const handleChangInput = ()=>{
    // dispatch(FilterSearchStudent.actions.filterSearchName(value))
  }
  return (
    <Modal onCancel={onCancel} footer={null} width={1000} open={isAddClassSubjectModal}>
      <Form form={form} onFinish={onFinish} className="pt-10 px-5">
        <Form.Item
          rules={[{ required: true, message: "please input your Class Name" }]}
          name="Ten_Lop"
          label={<p className="w-32 text-left">Tên Lớp</p>}
        >
          <Input variant="filled" onChange={handleChangInput} style={{width:"90%"}} placeholder="Nhập Tên Lớp" />
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
        <div>
          <Space.Compact><Select defaultValue={"Class"} options={option} onChange={onChangeSelectOption} /> <Input size="middle" prefix={<IoIosSearch/>}/></Space.Compact>
        </div>
        <FormItem>
          <Table
          rowSelection={rowSelection}
           columns={columns}
           dataSource={listStudent.map((student)=>({
            ...student,
            key:student.id_Student
          }))}
          size="large"
          scroll={{
            x: '500px',
            y: 240,
          }}
          pagination={{defaultPageSize:5,pageSizeOptions:['5','10','15'],showSizeChanger:true}}
          />
        </FormItem>
        <FormItem> <Button htmlType="submit">Dong y</Button></FormItem>
      </Form>
    </Modal>
  );
};

export default React.memo(AddSubjectModal);
