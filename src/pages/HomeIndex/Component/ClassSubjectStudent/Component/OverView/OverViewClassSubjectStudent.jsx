import React from "react";
import MessageChatStudent from "../../MessageChatStudent";
import { useDispatch, useSelector } from "react-redux";
import { StateInfo } from "../../../../../../redux/selector";
import { addDocument } from "../../../../../../Firebase/serviceFireStore";
import { Button, Form, Input } from "antd";
import { ClassSubjectFillter } from "../../../../../../redux/StudentReducer/SelectorStudent";
import useFireStore from "../../../../../../Firebase/useFireStore";
import imgBookCup from "../../../../../../assets/img_bookclub.jpg";
import { LuClipboardList, LuPenLine } from "react-icons/lu";
import BoxCreatePost from "../../../../../../Component/BoxCreatePosts";
import { ActiveModalContext } from "../../../../../../Context/ActiveModal";
import { Link } from "react-router-dom";
import { FETCH_API_Class } from "../../../../../../api/FetchAPIClass";
import ExcerciseStudentReducer from "../../../../../../redux/StudentReducer/ExcerciseStudentReducer";
const OverViewClassSubjectStudent = () => {
  const [form] = Form.useForm();
  const { fullName, user_Name } = useSelector(StateInfo);
  const { id_MonHoc } = useSelector(ClassSubjectFillter);
  const [baitap, setBaitap] = React.useState([]);
  const disp = useDispatch()
  const inputMessageRef = React.useRef(null)
  const messageEndRef= React.useRef(null)
  const fatherRef = React.useRef(null)
  const { setIsOpenJoinCallVideo } =
    React.useContext(ActiveModalContext);
    React.useEffect(() => {
      FETCH_API_Class.GetExercise(id_MonHoc, setBaitap);
    }, [id_MonHoc]);
  
  const Condition = React.useMemo(
    () => ({
      fieldName: "id_MonHoc",
      operator: "==",
      compareValue: id_MonHoc,
    }),
    [id_MonHoc]
  );
  const ListMessage = useFireStore("messages", Condition); // lấy các message ở firestore nên

  const hanldeCreateMessage = () => {
    const { textArea } = form.getFieldValue();
    addDocument("messages", { textArea, fullName, user_Name, id_MonHoc });
    form.resetFields();
    if (inputMessageRef?.current) {
      setTimeout(() => {
        inputMessageRef.current.focus()
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
      const parentRect = fatherRef.current.getBoundingClientRect();
      const childRect = messageEndRef.current.getBoundingClientRect();
      const scrollTop = childRect.top - parentRect.top + fatherRef.current.scrollTop;
      fatherRef.current.scrollTop = scrollTop;
    }
  };

  return (
    <div className="mt-5 flex mb-[100px] ">
      <div className="left-content mr-4 w-full h-max lg:w-2/3 xl:w-2/3 bg-white rounded-xl p-6">
        <div
          style={{ backgroundImage: `url(${imgBookCup})` }}
          className=" relative w-full h-[150px] rounded-md mt-3 bg-cover bg-no-repeat mx-auto"
        >
          <div className="flex - justify-end">
            <button className="flex items-center text-md py-2 px-4 m-2 mt-4 bg-white rounded-lg">
              <LuPenLine size={18} /> Tùy Chỉnh
            </button>
          </div>
          <div className="absolute bottom-0 left-0 text-white p">
            <h1 className="text-3xl py-4 px-6">Trung-Tùng</h1>
          </div>
        </div>
        <BoxCreatePost />
        <Button onClick={()=>setIsOpenJoinCallVideo(true)} size="large">Join Meet </Button>
        <div className="w-full relative mt-4 mx-auto">
        <ul className="noScrollBar flex w-full mt-3 flex-1 flex-wrap">
          {baitap.map((item, index) => {
            const datePart = item.hanNopBai.split("T")[0];
            const [ month, day] = datePart.split("-");
            return (
              <li
              onClick={()=>disp(ExcerciseStudentReducer.actions.addExcercise(item))}
                key={index}
                className="w-full my-2 h-14 flex justify-between px-3 rounded-lg items-center ease-in-out duration-150 hover:shadow-hoverExcerise"
              >
                <Link to="BaiTap" className="w-full flex items-center justify-between ">
                <div className="flex items-center ">
                  <div className="mr-3 bg-gray-300 p-3 rounded-full">
                    <LuClipboardList size={20} />
                  </div>
                  <p>{item.nameBaiTap}</p>
                </div>
                <div>Đến hạn {day} tháng {month}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      <div className="right-content  h-screen-minus-300 pb-10 hidden lg:block lg:w-1/3  mx-10 bg-white rounded-xl p-6">
        <h1 className="text-xl">Cilent Messages</h1>
        <div className="Messages ">
          <div className="relative flex-1 bg-slate-200">
            <div ref={fatherRef} className=" h-[500px] snap-y flex flex-col overflow-y-scroll snap-mandatory">
              {ListMessage.map((message, index) => {
                const date = message.createAt.toDate();
                const formattedDate = date.toLocaleString("vi-VN", {
                  hour12: true,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  // second: '2-digit'
                });
                return (
                  <div
                    key={index}
                    className={`w-full snap-end flex ${
                      message.user_Name === user_Name
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <MessageChatStudent
                      text={message.textArea}
                      createAt={formattedDate}
                      displayName={message.fullName}
                    />
                  </div>
                );
              })}
            <div ref={messageEndRef} />
            </div>
          </div>
          
            <div className="w-full">
              <Form onFinish={hanldeCreateMessage} form={form}>
                <Form.Item name="textArea">
                  <Input
                    //   bordered={false}
                    ref={inputMessageRef}
                    className="w-[400px]"
                    size="large"
                    placeholder="Nhập tin nhắn"
                    autoComplete="off"
                  />
                </Form.Item>
              </Form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewClassSubjectStudent;
