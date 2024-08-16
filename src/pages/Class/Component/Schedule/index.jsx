import React from 'react'
import './index.scss'
import { Calendar as Calendars } from 'antd'
import { FETCH_API } from '../../../../api/fetchAPI';
import { ActiveModalContext } from '../../../../Context/ActiveModal';
import { useDispatch } from 'react-redux';
import Calendar from '../../../../redux/SchoolReducer/Calendar';
export const Schedule = () => {
    const [lichHoc,setLichHoc] = React.useState([])
    const {setOpenCalendarModal} = React.useContext(ActiveModalContext)
    const dipsatch = useDispatch()
    React.useEffect(()=>{
        FETCH_API.fetchAPIV1GET_Authoriez("lichhoc",setLichHoc)
      },[])
      const handleOpenCalendarModal = (value)=>{
        const updateValue = value.map(item=>{
           let arr1= item.thoiGianBatDau.split(":")
           let arr2= item.thoiGianKetThuc.split(":")
           arr1.splice(-1,1)
           arr2.splice(-1,1)
           console.log(arr1)
            return{
                ...item,
                thoiGianBatDau : `${arr1[0]}:${arr1[1]}`,
                thoiGianKetThuc:`${arr2[0]}:${arr2[1]}`,
            }
        })
        dipsatch(Calendar.actions.getCalendar(updateValue))
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
  return (
    // <div className='bg-green-500 h-screen'>
    //     <table id='schedule' border='1' className='w-full h-full border-collapse font-thin overflow-hidden shadow-sm'>
    //         <thead>
    //             <tr>
    //                 <th>MonDay</th>
    //                 <th>TuesDay</th>
    //                 <th>Wednesday</th>
    //                 <th>Thurday</th>
    //                 <th>Friday</th>
    //                 <th>Satuday</th>
    //             </tr>   
    //         </thead>
    //         <tbody className='relative'>
    //             <tr>
    //                 <td onClick={()=>setIsActive(!isActive)} className={isActive ? 'absolute top-0 ease-in-out duration-300 bottom-0 bg-slate-800 w-screen scale-400 z-10':'ease-in-out duration-300 w-[290px]  delay-10'}>Monday</td>
    //                 <td>Tues</td>
    //                 <td>Wednesday</td>
    //                 <td>Thurday</td>
    //                 <td>Friday</td>
    //                 <td>Satuday</td>
    //             </tr>
    //             <tr>
    //                 <td>Monday</td>
    //                 <td>TuesDay</td>
    //                 <td>Wednesday</td>
    //                 <td>Thurday</td>
    //                 <td>Friday</td>
    //                 <td>Satuday</td>
    //             </tr>
    //             <tr>
    //                 <td>Monday</td>
    //                 <td>TuesDay</td>
    //                 <td>Wednesday</td>
    //                 <td>Thurday</td>
    //                 <td>Friday</td>
    //                 <td>Satuday</td>
    //             </tr>
    //             <tr>
    //                 <td>Monday</td>
    //                 <td>TuesDay</td>
    //                 <td>Wednesday</td>
    //                 <td>Thurday</td>
    //                 <td>Friday</td>
    //                 <td>Satuday</td>
    //             </tr>
    //         </tbody>
    //     </table>

    // </div>
    <Calendars  cellRender={dateFullCellRender}  />
)
}
