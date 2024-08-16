import React from "react";
import { MessageChatTeacher } from "./MessageChatTeacher";
import { Form, Input, message } from "antd";
import { addDocument } from "../../../../../Firebase/serviceFireStore";
import { useSelector } from "react-redux";
import { StateInfo } from "../../../../../redux/selector";
import { ClassSubject } from "../../../../../redux/TeacherReducer/selectorTeacher";
import useFireStore from "../../../../../Firebase/useFireStore";

const Chat = () => {
  const { fullName, user_Name } = useSelector(StateInfo);
  const { id_MonHoc } = useSelector(ClassSubject);
  const [form] = Form.useForm();
  const inputMessageRef = React.useRef()
  const hanldeCreateMessage = () => {
    const { textArea } = form.getFieldValue();
    addDocument("messages", { textArea, fullName, user_Name, id_MonHoc });
    form.resetFields();
    if (inputMessageRef?.current) {
      setTimeout(() => {
        inputMessageRef.current.focus()
      });
    }
  };
  const Condition = React.useMemo(
    () => ({
      fieldName: "id_MonHoc",
      operator: "==",
      compareValue: id_MonHoc,
    }),
    [id_MonHoc]
  );
  const ListMessage = useFireStore("messages", Condition);

  return (
    <div className="relative h-screen flex-1 overflow-y-scroll bg-slate-200">
      <div>
        {ListMessage.map((message,index) => {
            const date = message.createAt.toDate()
            const formattedDate = date.toLocaleString('vi-VN', {
                hour12: true,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                // second: '2-digit'
            });
        
          return (
            <div key={index} className={`w-full flex ${message.user_Name === user_Name ? "justify-end":"justify-start"}`}>
                <MessageChatTeacher    
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
            ref={inputMessageRef}
              style={{width:"1000px"}}
            //   bordered={false}
            size="large"
              placeholder="Nhập tin nhắn"
              autoComplete="off"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
