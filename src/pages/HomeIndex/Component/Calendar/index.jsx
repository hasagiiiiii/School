import React from 'react'
import { Calendar as Calendars } from 'antd'
import { FETCH_API } from '../../../../api/fetchAPI';
import { ActiveModalContext } from '../../../../Context/ActiveModal';
import { useDispatch } from 'react-redux';
import Calendar from '../../../../redux/SchoolReducer/Calendar';
// const lichmonData = [
//   {
//       "date": "2024-03-20",
//       "lichmon": [
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình C#",
//               "id_LichHoc": 26,
//               "thoiGianBatDau": "08:00:00",
//               "thoiGianKetThuc": "09:30:00",
//               "phonghoc": "P205A"
//           },
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình PHP",
//               "id_LichHoc": 27,
//               "thoiGianBatDau": "09:35:00",
//               "thoiGianKetThuc": "11:00:00",
//               "phonghoc": "P205A"
//           }
//       ]
//   },
//   {
//       "date": "2024-03-22",
//       "lichmon": [
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình C#",
//               "id_LichHoc": 28,
//               "thoiGianBatDau": "08:00:00",
//               "thoiGianKetThuc": "09:30:00",
//               "phonghoc": "P205B"
//           },
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình PHP",
//               "id_LichHoc": 29,
//               "thoiGianBatDau": "09:35:00",
//               "thoiGianKetThuc": "11:00:00",
//               "phonghoc": "P205B"
//           }
//       ]
//   },
//   {
//       "date": "2024-03-24",
//       "lichmon": [
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình C#",
//               "id_LichHoc": 30,
//               "thoiGianBatDau": "08:00:00",
//               "thoiGianKetThuc": "09:30:00",
//               "phonghoc": "P208"
//           },
//           {
//               "teacher": "gv1cntt@ntu.edu.vn",
//               "monHoc": "Lập trình PHP",
//               "id_LichHoc": 31,
//               "thoiGianBatDau": "09:35:00",
//               "thoiGianKetThuc": "11:00:00",
//               "phonghoc": "P208"
//           }
//       ]
//   }
// ];


const Calenda = () => {
  const [lichHoc,setLichHoc] = React.useState([])
  const {setOpenCalendarModal} = React.useContext(ActiveModalContext)
  const dipsatch = useDispatch()
  React.useEffect(()=>{
    FETCH_API.fetchAPIV1GET_Authoriez("lichhoc",setLichHoc)
  },[])

  const handleOpenCalendarModal = (value)=>{
    dipsatch(Calendar.actions.getCalendar(value))
    setOpenCalendarModal(true)
  }

const dateFullCellRender = (value) => {
  const date = value.format('YYYY-MM-DD');
  const lichmon = lichHoc.find(item => item.date === date);

  if (lichmon) {
      return (
          <div>
              {lichmon.lichmon.map(lich => (
                  <div  onClick={()=>handleOpenCalendarModal(lichmon.lichmon)} key={lich.id_LichHoc}>
                      <p>{lich.monHoc}</p>
                      <p>{lich.phonghoc}</p>
                  </div>
              ))}
          </div>
      );
  }

  return null;
};
  return <Calendars  cellRender={dateFullCellRender}  />;
}

export default Calenda