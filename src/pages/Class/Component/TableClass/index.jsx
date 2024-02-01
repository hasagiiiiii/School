import { Alert, Button, Table as Tb } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ClassRoomListContext } from "../../../../Context/ClassRoomListContext";
import { ListSubject } from "../../../../redux/selector";

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <Link to="">{text}</Link>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (record) => (
//       <Space size="middle">
//         <Link to="">Invite {record.name}</Link>
//         <Link to="">Delete</Link>
//       </Space>
//     ),
//   },
// ];
const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const data = useSelector(ListSubject)[0]?.listMonHoc;
  const { columns } = React.useContext(ClassRoomListContext);
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
      {data ? (
        <div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
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
          </div>
          <Tb
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data?.map((item, index) => ({
              ...item,
              key: index,
            }))}
          />
        </div>
      ) : (
        <Alert message="Hãy chọn một lớp" type="info" closable />
      )}
    </div>
  );
};

export default Table;
