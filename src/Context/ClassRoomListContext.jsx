import React from "react";
import { Tag } from "antd";
import { useDispatch } from "react-redux";
export const ClassRoomListContext = React.createContext();
const ClassRoomListProvider = ({ children }) => {
  const dispatch = useDispatch();
  const columns = [
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

  // Start fetch APi Class School
  // React.useEffect(() => {
  //   const token = localStorage.getItem("acces");
  //   fetch(
  //     "http://trendyt20231-001-site1.ftempurl.com/api/v1/school/user-school",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${JSON.parse(token)?.access_Token}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);
  // Finsih fetch Api Class School
  return (
    <ClassRoomListContext.Provider value={{ columns }}>
      {children}
    </ClassRoomListContext.Provider>
  );
};

export default ClassRoomListProvider;
