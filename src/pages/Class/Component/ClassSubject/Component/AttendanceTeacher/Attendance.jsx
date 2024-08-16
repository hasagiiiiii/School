import React from "react";
import { useSelector } from "react-redux";
import { ClassSubject } from "../../../../../../redux/TeacherReducer/selectorTeacher";
import "./index.scss";
import { FETCH_API_Class } from "../../../../../../api/FetchAPIClass";
import { AuthContext } from "../../../../../../Context/AuthProvider";
const Attendance = () => {
  const { id_MonHoc, lichhoc } = useSelector(ClassSubject);
  const [Attendances, setAttendances] = React.useState([]);
  const [active, setActive] = React.useState(null);
  const [AttendancesCopy, setAttendancesCopy] = React.useState([]);
  const {setLoading} = React.useContext(AuthContext)
  React.useEffect(() => {
    FETCH_API_Class.GetAttendance(id_MonHoc, setAttendances);
  }, [id_MonHoc]);
  const ChooseBuoihoc = (item, index) => {
    setActive(index);
    setAttendancesCopy(item.students);
  };
  console.log(Attendances)
  const hanldeChecked = (e, index) => {
    let name = e.target.name;
    let value = e.target.checked;
    const Cp = [...AttendancesCopy]
    Cp[index] = {...Cp[index],[name]:value}
    setAttendancesCopy(Cp)
  };
  const hanldeAccept = ()=>{
    FETCH_API_Class.PostAttendance(AttendancesCopy)
    setLoading(true)
  }
  return (
    <div className="w-full relative h-screen-minus-300 flex items-center flex-col justify-center bor">
      <ul className="fixed z-30 pl-4  bg-green-400 py-4 translate-x-32 bottom-0 flex items-center w-full h-16">
        {Attendances.map((item, index) => {
          const dayformat = new Date();
          let day = dayformat.toUTCString(item.thoiGianBatDau);
          return (
            <li
              key={index}
              onClick={() => ChooseBuoihoc(item, index)}
              className={`border cursor-pointer ${
                active === index ? "shadow-neumorphismButton" : ""
              } rounded-2xl mx-4 py-2 px-2`}
            >
              {day}
            </li>
          );
        })}
      </ul>
      <h2>SỔ ĐIỂM DANH THEO DÕI CHUYÊN CẦN SINH VIÊN</h2>
      <p>Học phần: Trí tuệ nhân tạo AI</p>
      <p>Lớp: K21CNT1</p>
      <p>Giảng viên: Phạm Văn Khánh</p>
      <p>Học kỳ: 1</p>

      <table className="Attendance">
        <thead>
          <tr className="header">
            <th>STT</th>
            <th>Mã Sinh viên</th>
            {/* <th>Họ và đệm</th> */}
            <th>Tên</th>
            {/* <th>Ngày sinh</th> */}
            <th>Đầu Giờ</th>
            <th>Giữa Giờ</th>
            <th>Đi muộn</th>
          </tr>
        </thead>
        <tbody>
          {AttendancesCopy.map((item,index) => (
            <tr key={item.id_DiemDanh}>
              <td>1</td>
              <td>{item.msv}</td>
              <td>{item.fullName}</td>
              {/* <td>6/11/2003</td> */}
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => hanldeChecked(e, index)}
                  checked={item._DauGio}
                  disabled={item._DauGio ? true : false}
                  name="_DauGio"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => hanldeChecked(e, index)}
                  checked={item._CuoiGio}
                  name="_CuoiGio"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => hanldeChecked(e, index)}
                  checked={item._DiMuon}
                  name="_DiMuon"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={6}><button onClick={hanldeAccept} className="text-xl float-left bg-green-200 hover:bg-green-400 ease-out duration-200 py-2 px-6 rounded-xl">Xác nhận</button></td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Attendance;
