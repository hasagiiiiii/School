import React from "react";
import MessageChatStudent from "./MessageChatStudent";
import { useSelector } from "react-redux";
import { StateInfo } from "../../../../redux/selector";
import { addDocument } from "../../../../Firebase/serviceFireStore";
import { Form, Input } from "antd";
import { ClassSubjectFillter } from "../../../../redux/StudentReducer/SelectorStudent";
import useFireStore from "../../../../Firebase/useFireStore";
import imgBookCup from "../../../../../src/assets/img_bookclub.jpg";
import { LuPenLine } from "react-icons/lu";
import BoxCreatePost from "../../../../Component/BoxCreatePosts";
const OverViewClassSubjectStudent = () => {
  const [form] = Form.useForm();
  const { fullName, user_Name } = useSelector(StateInfo);
  const { id_MonHoc } = useSelector(ClassSubjectFillter);

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
  };

  return (
    <div className="mt-5 flex mb-[100px] h-screen-minus-300 overflow-hidden">
      <div className="left-content mr-4 w-full  h-screen-minus-300 lg:w-2/3 xl:w-2/3 bg-white rounded-xl p-6">
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
      </div>
      <div className="right-content  h-screen-minus-300 hidden lg:block lg:w-1/3  mx-10 right-0 bg-white rounded-xl p-6">
        <h1 className="text-xl">Cilent Messages</h1>
        <div className="Messages ">
          <div className="relative h-screen flex-1  overflow-y-scroll bg-slate-200">
            <div className="mb-52">
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
                    className={`w-full flex ${
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
            </div>
            <div className="fixed bottom-0 w-full">
              <Form onFinish={hanldeCreateMessage} form={form}>
                <Form.Item name="textArea">
                  <Input
                    style={{ width: "1000px" }}
                    //   bordered={false}
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
    </div>
  );
};

export default OverViewClassSubjectStudent;
