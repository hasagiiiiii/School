import { Modal, Table } from 'antd'
import React from 'react'
import { ActiveModalContext } from '../Context/ActiveModal'
import { useSelector } from 'react-redux';
import { CalendarRedux } from '../redux/selector';


const columnsViewCalendar = [         // views student in class
    { title: "Teacher", dataIndex: "teacher", key: "teacher" },
    { title: "MonHoc", dataIndex: "monHoc", key: "monHoc" },
    { title: "ThoiGianBatDau", dataIndex: "thoiGianBatDau", key: "thoiGianBatDau" },
    {
      title: "thoiGianKetThuc",
      dataIndex: "thoiGianKetThuc",
      key: "thoiGianKetThuc",
    },
  ];

const CalendaModal = () => {
  const {isOpenCalendarModal,setOpenCalendarModal} = React.useContext(ActiveModalContext)
  const calen = useSelector(CalendarRedux)
  const hanldeOnCancle = ()=>{
    setOpenCalendarModal(false)
  }
  return (
    <Modal 
        open={isOpenCalendarModal}
        onCancel={hanldeOnCancle}
        footer={null}
        width={1000}
    >
        <Table columns={columnsViewCalendar} pagination={false} dataSource={calen?.map((item,index)=>({...item,key:index}))} />
    </Modal>
  )
}

export default React.memo(CalendaModal)