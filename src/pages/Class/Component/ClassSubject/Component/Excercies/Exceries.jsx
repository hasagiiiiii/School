import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Modal, DatePicker } from "antd";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoPushOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClassSubject } from "../../../../../../redux/TeacherReducer/selectorTeacher";
import { FETCH_API_Class } from "../../../../../../api/FetchAPIClass";
import iconDocs from "../../../../../../assets/4375147_logo_word_icon.svg";
import iconPDF from "../../../../../../assets/2133056_document_eps_file_format_pdf_icon.svg"
import { IoIosClose } from "react-icons/io";
import { AuthContext } from "../../../../../../Context/AuthProvider";
const view = [
  {
    "Bài Tập": (
      <div className=" bg-blue-100 p-2 rounded-full">
        <LuClipboardList size={30} />
      </div>
    ),
    "Bài kiểm Tra": (
      <div className=" bg-blue-100 p-2 rounded-full">
        <FaRegQuestionCircle size={30} />
      </div>
    ),
    "Câu hỏi Trắc Nghiệm": (
      <div className=" bg-blue-100 p-2 rounded-full">
        <FaRegQuestionCircle size={30} />
      </div>
    ),
  },
];
const Exceries = () => {
  const [active, setActive] = React.useState(false);
  const [type, setType] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [focustInput, setFocusInput] = React.useState(false);
  const [focustTextArea, setFocusTextArea] = React.useState(false);
  const [valueInput, setValueInput] = React.useState("");
  const [valueTextArea, setValueTextArea] = React.useState("");
  const [baitap, setBaitap] = React.useState([]);
  const [dateTime, setDateTime] = React.useState("");
  const [listFile, setListFile] = React.useState([]);
  const [listFileConvert, setListFileConvert] = React.useState([]);
  const { id_MonHoc } = useSelector(ClassSubject);
  const inpRef = React.useRef(null);
  const dropRef = React.useRef(null);
  // const {setLoading} = React.useContext(AuthContext)
  const RefDatePicker = React.useRef(null)
  React.useEffect(() => {
    FETCH_API_Class.GetExercise(id_MonHoc, setBaitap);
  }, [id_MonHoc]);
  const onCancel = () => {
    setVisible(false);
  };
  const hanldeChooseType = (name) => {
    setVisible(true);
    setType(name);
  };
  const hanldeOnChangInput = (value) => {
    setValueInput(value);
    setFocusInput(true);
  };
  const hanldeOnchangeTextArea = (value) => {
    setFocusTextArea(true);
    setValueTextArea(value);
  };
  const onChangFile = () => {
    const listF = inpRef.current.files;
    if (listF.length > 0) {
      setListFile((pre) => [...pre, ...listF]);
      const convert = [...listF].map((file) => URL.createObjectURL(file));
      setListFileConvert(convert);
    }
  };
  const handleClickOutside = (event) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const hanldeSubmit = () => {
    const time = new Date(dateTime).toUTCString();
    const formData = new FormData();
    formData.append("nameBaiTap", valueInput);
    formData.append("moTa", valueTextArea);
    formData.append("hanNopBai", time);
    formData.append("id_MonHoc", id_MonHoc);
    // formData.append('files',listFile)
    listFile.forEach((file) => {
      formData.append("files", file);
    });
    FETCH_API_Class.CreateExercise(formData);
    window.location.reload()
  };
  const handleDeleteFile = (item)=>{
    const listF = [...listFile];
    const result = listF.filter((file)=>{
      return file.name !== item.name
    })
    setListFile(result)
  }
  return (
    <div>
      <div className="w-1/2  mx-auto">
        <div ref={dropRef} className="relative mt-3">
          <button
            onClick={() => setActive(!active)}
            className="text-xl px-5 py-2 bg-blue-500 rounded-3xl text-white"
          >
            + Tạo
          </button>
          <ul
            onBlur={() => setActive(false)}
            className={`w-[235px] h-max flex flex-col bg-white absolute top-14  shadow-viewMenu justify-around p-2 origin-top-left ease-out duration-300 ${
              active ? "scale-100" : "scale-0"
            }`}
          >
            <li
              onClick={() => hanldeChooseType("Bài Tập")}
              className="flex w-56 cursor-pointer items-center p-3 hover:bg-gray-200 "
            >
              <LuClipboardList size={20} />
              <p className="mx-3 text-lg"> Bài tập</p>
            </li>
            <li
              onClick={() => hanldeChooseType("Bài kiểm Tra")}
              className="flex w-56 cursor-pointer items-center p-3 hover:bg-gray-200 "
            >
              <LuClipboardList size={20} />
              <p className="mx-3 text-lg"> Bài kiểm tra</p>
            </li>
            <li
              onClick={() => hanldeChooseType("Câu hỏi Trắc Nghiệm")}
              className="flex w-56 cursor-pointer items-center p-3 hover:bg-gray-200 "
            >
              <FaRegQuestionCircle size={20} />{" "}
              <p className="mx-3 text-lg">Câu hỏi trắc nghiệm</p>{" "}
            </li>
            <li
              onClick={() => hanldeChooseType("")}
              className="flex w-56 cursor-pointer items-center p-3 hover:bg-gray-200 "
            >
              <LuClipboardList size={20} />
              <p className="mx-3 text-lg"> Bài tập</p>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 border-t-4 mt-4  mx-auto">
        <ul className="flex w-full mt-3 flex-1 flex-wrap">
          {baitap.map((item, index) => {
            const datePart = item.hanNopBai.split("T")[0];
            const [month, day] = datePart.split("-");
            return (
              <li
                key={index}
                className="w-full my-2 h-14 flex justify-between px-3 rounded-lg items-center ease-in-out duration-150 hover:shadow-hoverExcerise"
              >
                <Link to={`/${item.nameBaiTap}`} className="flex items-center ">
                  <div className="mr-3 bg-gray-300 p-3 rounded-full">
                    <LuClipboardList size={20} />
                  </div>
                  <p>{item.nameBaiTap}</p>
                </Link>
                <div>
                  Đến hạn {day} tháng {month}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        onCancel={onCancel}
        footer={null}
        open={visible}
        width="100vw"
        className="!top-7"
        sty
      >
        <div className="h-max px-10">
          <div className="flex items-center justify-between">
            <div>
              {view.map((item, index) => {
                return (
                  <div key={index} className="flex items-center">
                    {item[type]} <h1 className="text-2xl pl-5">{type}</h1>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <button
                onClick={() => hanldeSubmit()}
                disabled={valueInput !== "" ? false : true}
                className={`text-xl duration-700 origin-right ease-in-out ${
                  valueInput !== "" ? "bg-blue-400 border-r" : "bg-gray-100"
                } py-3 rounded-s-xl px-5`}
              >
                Giao bài
              </button>
              <button className="bg-blue-400 rounded-r-lg pb-3 pt-[11px]">
                <MdOutlineArrowDropDown size={29} />
              </button>
            </div>
          </div>
          <div className="mt-3 flex border-2 ">
            <div className="h-max mx-auto bg-gray-100 w-2/3">
              <div className="w-[90%] mt-10 bg-white flex flex-col justify-center mx-auto">
                <div className="py-3 relative px-10 w-full">
                  <label
                    className={`absolute top-0 duration-300 ease-in-out  ${
                      focustInput
                        ? "translate-x-3 translate-y-4  text-sm text-blue-500 "
                        : "translate-x-3 translate-y-7 text-lg"
                    } `}
                    htmlFor=""
                  >
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    value={valueInput}
                    onBlur={() =>
                      valueInput !== ""
                        ? setFocusInput(true)
                        : setFocusInput(false)
                    }
                    onChange={(e) => hanldeOnChangInput(e.target.value)}
                    onFocus={() => setFocusInput(true)}
                    className="w-full py-4 mt-1 pl-3 text-lg  outline-none bg-gray-100"
                  />
                </div>
                <div className="py-3 relative px-10 w-full">
                  <label
                    className={`absolute top-0 duration-300 ease-in-out  ${
                      focustTextArea
                        ? "translate-x-3 translate-y-4  text-sm text-blue-500 "
                        : "translate-x-3 translate-y-7 text-lg"
                    } `}
                    htmlFor=""
                  >
                    Hướng dẫn không bắt buộc
                  </label>
                  <textarea
                    name="textarea"
                    value={valueTextArea}
                    className=" bg-gray-100 pb-20 pt-5 text-lg pl-3 w-full"
                    id=""
                    onBlur={() =>
                      valueTextArea !== ""
                        ? setFocusTextArea(true)
                        : setFocusTextArea(false)
                    }
                    onChange={(e) => hanldeOnchangeTextArea(e.target.value)}
                    onFocus={() => setFocusTextArea(true)}
                  />
                </div>
                <ul className="px-10 ">
                  {listFile.map((file,index) => {
                    const nameFile = file.name.split(".")[0]
                    const typeFile = file.name.split(".")[1]
                    return (
                      <li key={index} className="border my-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="border-r pr-4">
                          <img width={70} src={typeFile==="docx"?iconDocs:iconPDF} alt="" />
                        </div>
                        <div className="pl-2">
                          <h1>
                            {nameFile}
                          </h1>
                          <p>{typeFile.toUpperCase()}</p>
                        </div>
                        </div>
                        <button className="mr-5" onClick={()=>handleDeleteFile(file)}><IoIosClose size={40}/></button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-[90%] mb-7  mx-auto bg-white mt-4">
                <h1>Đính Kèm</h1>
                <ul className="w-full flex justify-center items-center mt-6 h-24">
                  <li>
                    <div className="flex  flex-col justify-center ">
                      <div className="w-max mx-auto p-3 rounded-full hover:bg-gray-200">
                        <button
                          className="bg-white mx-auto p-3 rounded-full border border-gray-500"
                          onClick={() => inpRef.current.click()}
                        >
                          <IoPushOutline size={25} />
                        </button>
                      </div>
                      <h1 className="text-center">Tệp Đính Kèm</h1>
                    </div>
                    <input
                      type="file"
                      multiple
                      ref={inpRef}
                      onChange={onChangFile}
                      style={{ display: "none" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 h-full bg-gray-100">
              <div className="bg-white h-[90%] mt-6">
                <h1>Hạn nộp</h1>
                <DatePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  onChange={(date) => setDateTime(date)}
                  showTime
                  ref={RefDatePicker}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Exceries;
