import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Space,
  DatePicker,
} from "antd";
import React from "react";
import { ActiveModalContext } from "../Context/ActiveModal";
import { useDispatch, useSelector } from "react-redux";
import { StudentFillterAddClassSubject } from "../redux/selector";
import FormItem from "antd/es/form/FormItem";
import { IoIosSearch } from "react-icons/io";
import { AppContext } from "../Context/AppContext";
import FilterSearchStudent from "../redux/SchoolReducer/FilterSearchStudent";
import { FETCH_API } from "../api/fetchAPI";
const formValueAddClassSubject = {
  monHoc: {
    name_MonHoc: "",
    ngayKetThuc: "",
    ngayBatDau: "",
    _SoBuoiNghi: 0,
    _SoBuoiHoc: 0,
    id_Teacher: undefined,
  },
  students: [
    {
      id_Student: 0,
    },
  ],
  lichHocs: [
    {
      thoiGianBatDau: "",
      thoiGianKetThuc: "",
      phonghoc: "",
      phuongPhapHoc: "",
      tinhTrangBuoiHoc: "",
    },
  ],
};

const option = [
  { value: "Class", label: "Class" },
  { value: "user_Name", label: "UserName" },
  { value: "fullName", label: "FullName" },
  { value: "All", label: "All" },
];

const CustomDatePicker = ({ name, onChange, value, index }) => {
  const handleChange = (date) => {
    onChange({ target: { name, value: date ?? null } }, index);
  };

  return (
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      showTime
      onChange={handleChange}
      value={value}
    />
  );
};

const AddSubjectModal = () => {
  const { isAddClassSubjectModal, setIsAddClassSubjectModal } =
    React.useContext(ActiveModalContext);
  const [statusSubject,setStatusSubject] = React.useState()
  const [formValue, setFormValue] = React.useState(formValueAddClassSubject);
  const { teachers, columns } = React.useContext(AppContext);
  const listStudent = useSelector(StudentFillterAddClassSubject);
  const [countCalendar, setCountCalendar] = React.useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  React.useEffect(()=>{
    FETCH_API.fetchAPIV1GET_Authoriez("tinhtrangbuoihoc",setStatusSubject)
  },[])

  const onCancel = () => {
    setSelectedRowKeys([]);
    setIsAddClassSubjectModal(false);
    setCountCalendar(0);
    form.resetFields();
    setFormValue(formValueAddClassSubject);
  };
  const hanldeChangeFormValueMonHoc = (valueOrEvent, name) => {
    let nameField;
    let valueField;

    // Kiểm tra nếu đây là sự kiện từ Input
    if (valueOrEvent && valueOrEvent.target) {
      nameField = valueOrEvent.target.name;
      valueField = valueOrEvent.target.value;
    } else {
      // Nếu không, xử lý cho Select (hoặc các phần tử khác)
      nameField = name;
      valueField = valueOrEvent;
    }

    // Cập nhật state
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      monHoc: {
        ...prevFormValue.monHoc, // Giữ lại các thuộc tính khác của monHoc
        [nameField]: valueField,
      },
    }));
  };
  // update formValue
  React.useMemo(() => {
    // cập nhật lại state
    setFormValue((pre) => ({
      ...pre,
      lichHocs: Array.from({ length: countCalendar }, (_, index) => ({
        ...pre.lichHocs[index],
        thoiGianBatDau: pre.lichHocs[index]?.thoiGianBatDau || "",
        thoiGianKetThuc: pre.lichHocs[index]?.thoiGianKetThuc || "",
        phonghoc: pre.lichHocs[index]?.phonghoc || "",
        phuongPhapHoc: pre.lichHocs[index]?.phuongPhapHoc || "",
        tinhTrangBuoiHoc: pre.lichHocs[index]?.tinhTrangBuoiHoc || "",
      })),
    }));
  }, [countCalendar, setFormValue]);

  const hanldeChangeFormValueLichHoc = (valueOrEvent, name,index) => {
    let nameField;
    let valueField;
    console.log(index)
    // Kiểm tra nếu đây là sự kiện từ Input
    if (valueOrEvent && valueOrEvent.target) {
      nameField = valueOrEvent.target.name;
      valueField = valueOrEvent.target.value;
    } else {
      // Nếu không, xử lý cho Select (hoặc các phần tử khác)
      nameField = name;
      valueField = valueOrEvent;
    }

    // Cập nhật state
    setFormValue((pre) => {
      const newLichHocs = [...pre.lichHocs];
      newLichHocs[index] = { ...newLichHocs[index], [nameField]: valueField };
      return { ...pre, lichHocs: newLichHocs };
    });
  };

  const onFinish = () => {
    const lastIndex = formValue.lichHocs.length - 1; // lấy vị trí của phần tử cuối cùng trong mảng
    const timeStart = new Date(formValue.lichHocs[0]?.thoiGianBatDau).toISOString();
    const timeEnd = new Date(formValue.lichHocs[lastIndex]?.thoiGianKetThuc).toISOString();
    console.log(timeEnd)
    const formValueSubmit = {
      lichHocs: [
        ...formValue.lichHocs.map((date) => ({
          ...date,
          thoiGianBatDau: new Date(date.thoiGianBatDau).toISOString(),
          thoiGianKetThuc: new Date(date.thoiGianKetThuc).toISOString(),
        })),
      ],
      monHoc: {
        ...(formValue.monHoc = {
          ...formValue.monHoc,
          ngayBatDau: timeStart,
          ngayKetThuc: timeEnd,
          _SoBuoiHoc: countCalendar
        }),
      },
      students: [...selectedRowKeys].map((student)=>({id_Student:student})),
    };
    console.log(formValueSubmit);

    fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/monhoc`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formValueSubmit)
    }).then(res=>res.json()).then(data=>console.log(data))
    // setSelectedRowKeys([]);
    // setCountCalendar(0);
    // form.resetFields();
  };
  const handleOnchangeInput = (value) => {
    dispatch(FilterSearchStudent.actions.filterSearchName(value));
  };

  const onChangeSelectOption = (value) => {
    dispatch(FilterSearchStudent.actions.onChangeType(value));
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <Modal
      onCancel={onCancel}
      footer={null}
      width={1000}
      open={isAddClassSubjectModal}
    >
      <Form form={form} onFinish={onFinish} className="pt-10 px-5">
        <Form.Item
          rules={[
            {
              required: isAddClassSubjectModal,
              message: "please input your Class Name",
            },
          ]}
          label={<p className="w-32 text-left">Tên Lớp</p>}
          name="tenLop"
        >
          <Input
            variant="filled"
            onChange={hanldeChangeFormValueMonHoc}
            style={{ width: "90%" }}
            placeholder="Nhập Tên Lớp"
            name="name_MonHoc"
            value={formValue.monHoc.name_MonHoc}
          />
        </Form.Item>
        <Form.Item
          label={<p className="w-32 text-left">Choose Teacher</p>}
          rules={[
            {
              required: isAddClassSubjectModal,
              message: "please choose a teacher",
            },
          ]}
          name="id_Teacher"
        >
          <Select
            mode="tags"
            name="id_Teacher"
            optionFilterProp="name_Khoa"
            value={formValue.monHoc.id_Teacher}
            onChange={(e) => hanldeChangeFormValueMonHoc(e[0], "id_Teacher")}
            placeholder="Choose Teacher"
            style={{ width: "90%" }}
            options={teachers.map((item) => ({
              value: item?.id_Teacher,
              label: item?.fullName,
            }))}
          />
        </Form.Item>
        <FormItem
          rules={[
            {
              required: isAddClassSubjectModal,
              message: "Vui Lòng nhập số lượng buổi học",
            },
            { pattern: /^\d+$/, message: "Vui Lòng nhập chữ số" }, // Quy tắc để kiểm tra đầu vào phải là một số
          ]}
          name="_SoBuoiHoc"
          label={<p className="w-40 text-left">Thời Lượng Buổi học</p>}
        >
          <Input
            placeholder="Vui Lòng nhập số buổi học"
            style={{ width: "90%" }}
            onChange={(e) => setCountCalendar(parseInt(e.target.value))}
          />
        </FormItem>
        {countCalendar
          ? Array(countCalendar)
              ?.fill(null)
              .map((_, index) => (
                <div className="" key={index}>
                  <CustomDatePicker
                    name="thoiGianBatDau"
                    onChange={(e) => hanldeChangeFormValueLichHoc(e,null, index)}
                    value={formValue.lichHocs[index]?.thoiGianBatDau || ""}
                  />
                  <CustomDatePicker
                    name="thoiGianKetThuc"
                    onChange={(e) => hanldeChangeFormValueLichHoc(e,null, index)}
                    value={formValue.lichHocs[index]?.thoiGianKetThuc || ""}
                  />
                  <Input
                    placeholder="Nhap vao day"
                    name="phonghoc"
                    onChange={(e) => hanldeChangeFormValueLichHoc(e,null, index)}
                    value={formValue.lichHocs[index]?.phonghoc || ""}
                    key={index}
                  />
                  <Input
                    placeholder="Nhap vao day"
                    name="phuongPhapHoc"
                    onChange={(e) => hanldeChangeFormValueLichHoc(e,null, index)}
                    value={formValue.lichHocs[index]?.phuongPhapHoc || ""}
                  />
                  <Select
                    name="tinhTrangBuoiHoc"
                    onChange={(e) => hanldeChangeFormValueLichHoc(e, "tinhTrangBuoiHoc",index)}
                    value={formValue.lichHocs[index]?.tinhTrangBuoiHoc || ""}
                    style={{ width: "100%" }}
                    defaultValue={statusSubject[0].name}
                    options={statusSubject.map(item=>({
                      value: item?.name,
                      label: item?.name,
                    }))}
                  />
                </div>
              ))
          : // Array.from({ length: count }): Tạo một mảng tạm thời với độ dài là count. Mỗi phần tử trong mảng này sẽ là undefined.
            // Array(count).fill(null): Tạo một mảng với độ dài là count, và điền tất cả phần tử của nó bằng null.
            null}
        <div>
          <Space.Compact>
            <Select
              defaultValue={"Class"}
              options={option}
              onChange={onChangeSelectOption}
            />{" "}
            <Input
              size="middle"
              onChange={(e) => handleOnchangeInput(e.target.value)}
              prefix={<IoIosSearch />}
            />
          </Space.Compact>
        </div>
        <FormItem>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={listStudent.map((student) => ({
              ...student,
              key: student.id_Student,
            }))}
            size="large"
            scroll={{
              x: "500px",
              y: 240,
            }}
            pagination={{
              defaultPageSize: 5,
              pageSizeOptions: ["5", "10", "15"],
              showSizeChanger: true,
            }}
          />
        </FormItem>

        <FormItem>
          <Button htmlType="submit">Dong y</Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default React.memo(AddSubjectModal);
