import { Alert, Button, Table as Tb } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ClassRoomListContext } from "../../../../Context/ClassRoomListContext";
import { ListSubject } from "../../../../redux/selector";
import { ClassSubject } from "../../../../redux/TeacherReducer/selectorTeacher";


const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const data = useSelector(ListSubject)[0]?.listMonHoc;
  const dataClassSubject = useSelector(ClassSubject)
  console.log(dataClassSubject)
  const { columnsViewStudent } = React.useContext(ClassRoomListContext);
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
            columns={columnsViewStudent}
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
