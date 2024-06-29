import React from 'react'
import { useSelector } from 'react-redux'
import { ClassSubject } from '../../../../../../redux/TeacherReducer/selectorTeacher'
import "./index.scss"
import { FETCH_API_Class } from '../../../../../../api/FetchAPIClass'
const Attendance = () => {
    const {id_MonHoc,lichhoc} = useSelector(ClassSubject)
    const [Attendances,setAttendances] = React.useState([])

    React.useEffect(()=>{
        FETCH_API_Class.GetAttendance(id_MonHoc,setAttendances)
    },[id_MonHoc])
    console.table(lichhoc,Attendances)
    return (
    <div className='w-full relative h-screen-minus-300 flex items-center flex-col justify-center bor'>
        <ul className='fixed z-30 pl-4  bg-slate-200 py-4 translate-x-32 bottom-0 flex items-center w-full h-16'>
            {lichhoc.map((item,index)=>{
                const dayformat = new Date()
                let day = dayformat.toUTCString(item.thoiGianBatDau)
               return( <li key={index} className='border shadow-neumorphismButton rounded-2xl mx-4 py-2 px-2'>{day}</li>)
            })}
        </ul>
        <h2>SỔ ĐIỂM DANH THEO DÕI CHUYÊN CẦN SINH VIÊN</h2>
    <p>Học phần: Trí tuệ nhân tạo AI</p>
    <p>Lớp: K21CNT1</p>
    <p>Giảng viên: Phạm Văn Khánh</p>
    <p>Học kỳ: 1</p>

    <table className='Attendance'>
        <thead>
            <tr className="header">
                <th>STT</th>
                <th>Mã Sinh viên</th>
                <th>Họ và đệm</th>
                <th>Tên</th>
                <th>Ngày sinh</th>
                <th>CC</th>
                <th>TP</th>
                <th>GK</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2110900089</td>
                <td>Bùi Đức</td>
                <td>Anh</td>
                <td>6/11/2003</td>
                <td>10</td>
                <td>-0.5</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2110900003</td>
                <td>Bùi Tiến</td>
                <td>Anh</td>
                <td>13/12/2003</td>
                <td>9</td>
                <td>2.5</td>
                <td>3</td>
                
            </tr>
            <tr>
                <td>3</td>
                <td>2110900006</td>
                <td>Nguyễn Tuấn</td>
                <td>Anh</td>
                <td>29/9/2003</td>
                <td>10</td>
                <td>3.5</td>
                <td>2</td>
               
            </tr>
            <tr>
                <td>4</td>
                <td>2110900077</td>
                <td>Nguyễn Đức</td>
                <td>Chiến</td>
                <td>8/3/2003</td>
                <td>9</td>
                <td>2.25</td>
                <td>1.75</td>
            </tr>
            <tr>
                <td>5</td>
                <td>2110900012</td>
                <td>Nguyễn Ngọc</td>
                <td>Dũng</td>
                <td>23/1/2003</td>
                <td>10</td>
                <td>1.5</td>
                <td>3</td>
            </tr>
            <tr>
                <td>6</td>
                <td>2110900104</td>
                <td>Khuất Quang</td>
                <td>Dương</td>
                <td>18/10/2003</td>
                <td>7</td>
                <td>0.5</td>
                <td>3.5</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Attendance