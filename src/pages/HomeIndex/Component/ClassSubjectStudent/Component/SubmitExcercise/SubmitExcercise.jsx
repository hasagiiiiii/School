import React from 'react'
import { LuClipboardList } from 'react-icons/lu'
import { IoMdAdd } from "react-icons/io";
import { useSelector } from 'react-redux';
import iconDocs from "../../../../../../assets/4375147_logo_word_icon.svg";
import iconPDF from "../../../../../../assets/2133056_document_eps_file_format_pdf_icon.svg"
import { Nopbaitap } from '../../../../../../redux/StudentReducer/SelectorStudent';
import {FetchApi_Student} from '../../../../../../api/FetchAPIStudent';
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const SubmitExcercise = () => {
  const inputRef = React.useRef(null)
  const [listFile, setListFile] = React.useState([]);
  const {giaoVienGiao,hanNopBai,moTa,idBaiTap,nameBaiTap,file} = useSelector(Nopbaitap)
  const [danop,setDanop] = React.useState([])
  const datePart = hanNopBai.split("T")[0];
  const [ year, month,day] = datePart.split("-");
  const DateCompare = new Date(hanNopBai)
  const DateNow = new Date()
  React.useEffect(()=>{
    FetchApi_Student.GetBaiTapDaNop(idBaiTap,setDanop)


  },[idBaiTap])

  
  const onChangFile = () => {
    const listF = inputRef.current.files; // lấy list File 
    if (listF.length > 0) {
      setListFile((pre) => [...pre, ...listF]);
      // const convert = [...listF].map((file) => URL.createObjectURL(file));
      // setListFileConvert(convert);
    }
  };
  const handleDeleteFile = (item)=>{
    const listF = [...listFile];
    const result = listF.filter((file)=>{
      return file.name !== item.name
    })
    setListFile(result)
  }
  const hanldeSubmit = ()=>{
    const formData = new FormData()
    listFile.forEach((file) => {
      formData.append("files", file);
    });
    formData.append('idBaiTap',idBaiTap )
    FetchApi_Student.PostNopBaiTap(formData)
    .then((res) => {
      if(res){
        alert("Đã nộp bài thành công")

      }else{
        alert(res)
      }
      })
  }
  return (
    <div className='flex'>
      <div className='left bg-white w-2/3 rounded-lg'>
        <div className='flex pt-10 w-3/4 mx-auto h-screen-minus-300'>
          <div className='p-3 bg-blue-500 rounded-full h-max mr-4'><LuClipboardList size={25} /></div>
          <div className='flex w-full flex-col justify-start'>
            <h1 className='text-3xl'>{nameBaiTap}</h1>
            <p className='text-sm opacity-70'>{giaoVienGiao??"Chưa có thông tin"}</p>

            <div className='flex pb-4 justify-between mt-3 border-b-2'><p>100 điểm</p><p>{day&&month ? `Đến hạn ${day} tháng ${month}`: "Chưa có thông tin"}</p></div>

            <div className='mt-4 border-b-2 pb-4'>{moTa}</div>
            <ul>
            {file.map((item,index) => {
                    const nameFile = item.nameFile.split(".")[0]
                    const typeFile = item.nameFile.split(".")[1]
                    return (
                      <li key={index} className="border hover:bg-gray-200 p-2 my-3 rounded-xl flex items-center justify-between">
                        <Link target='_blank' to={`${process.env.REACT_APP_URL_SEVER }/${item?.urlFile}`}>
                        <div className="flex items-center">
                        <div className="border-r pr-4">
                          <img width={70} src={typeFile==="docx"?iconDocs:iconPDF} alt="" />
                        </div>
                        <div className="pl-2">
                          <h1>
                            {nameFile}
                          </h1>
                          <p>{typeFile.toUpperCase()}</p>
                        </div>
                        </div></Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
      <div className='right w-1/3'>
        <div className='bg-white pb-10 w-[90%] mx-auto rounded-lg'>
          <div className='flex flex-col justify-start px-3 mx-auto'>
            <div className='flex w-2/3 mx-auto mb-6 justify-between pt-10 '>
              <h1 className='text-xl'>Bài tập của bạn</h1>
              <p className={`${danop.length > 0 ? "text-blue-500":"text-green-400"}`}>{danop.length > 0 ? "Đã Nộp" : "Đã Giao"}</p>
            </div>
            <div>
              <button onClick={()=>DateCompare > DateNow || danop.length > 0 ? null : inputRef.current.click()} className={`flex border w-2/3 mx-auto justify-center rounded-lg text-blue-300 text-lg items-center ${DateCompare > DateNow || danop.length > 0 ? "" : "hover:bg-blue-100 hover:text-blue-500"}`}><IoMdAdd size={25}/> Thêm hoặc tạo</button>
              <input type="file" multiple onChange={onChangFile} ref={inputRef} className='hidden' name="" id="" />
              <ul className='py-5'>
              {listFile.map((item,index) => {
                    const nameFile = item.nameFile.split(".")[0]
                    const typeFile = item.nameFile.split(".")[1]
                    return (
                      <li key={index} className="border my-3 rounded-xl flex items-center justify-between">
                        <div className="flex items-center">
                        <div className="border-r pr-4">
                          <img width={70} src={typeFile==="docx"?iconDocs:iconPDF} alt="" />
                        </div>
                        <div className="pl-2">
                          <h1>
                            {nameFile}
                          </h1>
                          <p>{typeFile.toUpperCase()}</p>
                        </div>
                        </div>
                        <button className="mr-5" onClick={()=>handleDeleteFile(item)}><IoIosClose size={40}/></button>
                      </li>
                    );
                  })}
              </ul>
              <button disabled={DateCompare > DateNow || danop.length > 0 ? false : true} onClick={()=>hanldeSubmit()} className={`${DateCompare > DateNow || danop.length > 0 ?"bg-blue-300":"bg-blue-600 hover:bg-blue-600"}  text-white py-2 rounded-lg flex justify-center mt-4 text-center w-2/3 mx-auto`}>Nộp bài</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitExcercise