import { Button, Table } from "antd";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilterSearchStudent from "../../../redux/SchoolReducer/FilterSearchStudent";
import ListStudentReducer from "../../../redux/SchoolReducer/ListStudentReducer";
import { StudentsFilter } from "../../../redux/selector";
import { IoMdAdd } from "react-icons/io";

const columns = [
  { title: "MSV", dataIndex: "msv", key: "msv" },
  { title: "FullName", dataIndex: "fullName", key: "fullName" },
  { title: "Email", dataIndex: "email_User", key: "email_User" },
  { title: "Sex", dataIndex: "sex_User", key: "sex_User" },
  {
    title: "Image",
    dataIndex: "image_User",
    key: "image_User",
    render: (imgUser, index) => (
      <img
        key={index}
        src={`http://trendyt20231-001-site1.ftempurl.com/${imgUser}`}
        alt={imgUser}
        width={30}
        loading="lazy"
      />
    ),
  },
];

const ContentDepartment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listStudent = useSelector(StudentsFilter);
  const [valueInput, setValueInput] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // start fetch API Get All Student
  React.useEffect(() => {
    const token = localStorage.getItem("acces");
    try {
      fetch(`${process.env.REACT_APP_URL_SEVER}api/v2/school/get-all-student`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(token).access_Token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => dispatch(ListStudentReducer.actions.addStudents(data)))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);
  // finish fetch API

  // handle onChangeInput
  const handleOnchangeInput = (value) => {
    dispatch(FilterSearchStudent.actions.filterSearchName(value));
    setValueInput(value);
  };

  //
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div className="relative flex items-center w-[90%] h-20 mx-auto mt-5 mb-16 bg-white rounded-md shadow-lg ">
        <div className="">
          <label className="absolute left-8 top-[30px]" htmlFor="search">
            <IoSearch size={20} />
          </label>
          <input
            type="text"
            name="search"
            className="w-56 h-9 ml-16 focus:outline-none"
            placeholder="Search"
            onChange={(e) => handleOnchangeInput(e.target.value)}
            value={valueInput}
          />
        </div>
        <div>
          <div className="icons ml-auto cursor-pointer">
            <IoMdAdd size={30} />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto bg-white rounded-md shadow-lg">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          className="!bg-blue-400"
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        <Table
          rowSelection={rowSelection}
          dataSource={listStudent?.map((student, index) => ({
            ...student,
            key: index,
          }))}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default ContentDepartment;

// const classs = {
//   nameCLass:"",
//   teacher:"",
//   listStudent :[
//     {sv1},{sv2}
//   ]
// }

// listTeacher= [
//   {t1},{t2},{t3}
// ]

// const classMonHoc = {
//   nameCLass:"",
//   teacher:{},
//   monhoc:"",
//   listStudent :[
//     {sv1},{sv2}
//   ]
// }
