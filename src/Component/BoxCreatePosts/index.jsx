import { Avatar, Modal } from "antd";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.scss"
const BoxCreatePost = () => {
  const [isOpenModalCreatePost, setIsOpenModalCreatePost] =
    React.useState(false);
  const [valueTextArea, setValueTextArea] = React.useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["code-block"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list", 
    "bullet",
    "color",
    "background",
    "align",
    "code-block",
  ];
  const handleCancel = () => {
    setIsOpenModalCreatePost(false);
  };
  return (
    <div>
      <div
        onClick={() => setIsOpenModalCreatePost(true)}
        className="flex items-center mt-4 rounded-md border border-borderBoxCreatePosts p-4 shadow-lg hover:bg-slate-100 ease-in-out duration-100"
      >
        <Avatar className="flex items-center" size="large">
          <div className="text-xl">T</div>
        </Avatar>
        <div>Thông báo nội dung cho lớp học của bạn</div>
      </div>
      <Modal
        open={isOpenModalCreatePost}
        onCancel={handleCancel}
        cancelText="Hủy"
        onOk={handleCancel}
        width={1000}
        // footer={null}
        okButtonProps={{style:{backgroundColor:"#1677ff"}}}
      >
        <ReactQuill
          value={valueTextArea}
          onChange={setValueTextArea}
          modules={modules}
          formats={formats}
          placeholder="Hãy nhập nội dung vào đây"
          toolbarPlacement="bottom"
          className="custom-quill"
        />
      </Modal>
    </div>
  );
};

export default BoxCreatePost;
