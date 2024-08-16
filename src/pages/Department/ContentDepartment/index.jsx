import { Button, Form, Table } from "antd";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import FilterSearchStudent from "../../../redux/SchoolReducer/FilterSearchStudent";
import ListStudentReducer from "../../../redux/SchoolReducer/ListStudentReducer";
import { StudentsFilter } from "../../../redux/selector";
import { IoMdAdd } from "react-icons/io";
import { ActiveModalContext } from "../../../Context/ActiveModal";
import { AppContext } from "../../../Context/AppContext";



const ContentDepartment = () => {
  const dispatch = useDispatch();
  const {setIsAddClassSubjectModal,setIsOpenAddClassModal} = React.useContext(ActiveModalContext);
  const {columns} = React.useContext(AppContext)
  const [valueInput, setValueInput] = React.useState("");
  const listStudent = useSelector(StudentsFilter);
  // start fetch API Get All Student
  React.useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_URL_SEVER}/api/v1.0/student`, {
        method: "GET",
        credentials: 'include'
      })
        .then((res) => res.json())
        .then((data) => dispatch(ListStudentReducer.actions.addStudents(data)))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);
  // finish fetch API

  // handle onChangeInput
  const handleOnchangeInput = (value) => {
    dispatch(FilterSearchStudent.actions.filterSearchName(value));
    setValueInput(value);
  };


  return (
    <div className="w-full ">

      {/* <---------------------/NAVBAR HEADER\----------------------------> */}
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
        <div onClick={()=>setIsOpenAddClassModal(true)} className="mr-3">
          <div className="icons ml-auto cursor-pointer">
            <Button className="flex items-center" icon={<IoMdAdd size={20} />} size="large">
            AddClass
            </Button>
          </div>
        </div>
        <div onClick={()=>setIsAddClassSubjectModal(true)}>
          <Button icon={<IoMdAdd size={20} />} size="large">AddSubjectClass</Button>
        </div>
      </div>
      {/* <---------------------/START TALBE\----------------------------> */}
      <div className="w-[90%] mx-auto bg-white rounded-md shadow-lg">
        <span
          style={{
            marginLeft: 8,
          }}
        >
        </span>
        <Table
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

export default React.memo(ContentDepartment);
