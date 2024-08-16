import React from "react";
import { Tag } from "antd";
export const ClassRoomListContext = React.createContext();
const ClassRoomListProvider = ({ children }) => {
  const columnsViewStudent = [         // views student in class
    { title: "NameClass", dataIndex: "NameClass", key: "NameClass" },
    { title: "Teacher", dataIndex: "Teacher", key: "Teacher" },
    { title: "StudentCount", dataIndex: "StudentCount", key: "StudentCount" },
    {
      title: "tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "UnActive") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag.toUpperCase()}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];


  const columnsViewClass = [  //views all class
    { title: "NameClass", dataIndex: "name_ClassSchool", key: "name_ClassSchool" },
    {
       title: "Teacher",
        dataIndex: "chu_nhiem",
         key: "chu_nhiem",
         render: (_,{chu_nhiem})=>{
            return (<p>{chu_nhiem?.fullName}</p>)
         }
      },
    { title: "StudentCount", dataIndex: "count_student", key: "count_student",render:(_,{count_student})=>(<div className="ml-10">{count_student}</div>) },
    {
      title: "Trạng Thái",
      dataIndex: "tags", 
      key: "tags",
      render: (_, { tags }) => {
          if(tags==="active"){
            return (
              <Tag color="green" key={tags.toUpperCase()}>
                   {tags}
                 </Tag>
            )
          }
        if(tags==="delete"){
          return (
            <Tag color="volcano" key={tags.toUpperCase()}>
                 {tags}
               </Tag>
          )
        }
        if(tags==="done"){
          return (
            <Tag color="geekblue" key={tags.toUpperCase()}>
                 {tags}
               </Tag>
          )
        }
      },
    },
  ];

  return (
    <ClassRoomListContext.Provider value={{ columnsViewClass,columnsViewStudent }}>
      {children}
    </ClassRoomListContext.Provider>
  );
};

export default ClassRoomListProvider;
