import React from 'react'
import { FETCH_API } from '../../../api/fetchAPI'
import { Table } from 'antd'
import { ClassRoomListContext } from '../../../Context/ClassRoomListContext'

export const ShowClass = () => {
  const [listClass,setListClass] = React.useState([])
  const {columnsViewClass} = React.useContext(ClassRoomListContext)
  React.useEffect(()=>{
    FETCH_API.fetchAPIV1GET_Authoriez('class',setListClass)
  },[])
  const handleRowClick = record => {
    console.log('Row clicked:', record);
    // Thực hiện hành động mong muốn khi hàng được nhấp vào
  };

  return (
    <div>
      <Table
        columns={columnsViewClass}
        dataSource={listClass?.map((item) => ({
          ...item,
          key:item.id_ClassSchool
        }))}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => handleRowClick(record),
          };
        }}
      />
    </div>
  )
}
