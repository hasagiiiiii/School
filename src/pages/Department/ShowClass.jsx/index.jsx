import React from 'react'
import { FETCH_API } from '../../../api/fetchAPI'
import { Avatar, Button, Table } from 'antd'
import { ClassRoomListContext } from '../../../Context/ClassRoomListContext'
import { StyleProvider } from '@ant-design/cssinjs';
import { IoChatbubbleEllipsesSharp, IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export const ShowClass = () => {
  const [listClass,setListClass] = React.useState([])
  const {columnsViewClass} = React.useContext(ClassRoomListContext)
  const navigate = useNavigate()
  React.useEffect(()=>{
    FETCH_API.fetchAPIV1GET_Authoriez('class-school',setListClass)
  },[])
  let date = new Date().toDateString().split(" ");
  let dayOfWeek = date.shift();
  let year = date.pop();
  const handleRowClick = record => {
    console.log('Row clicked:', record);
    // Thực hiện hành động mong muốn khi hàng được nhấp vào
  };

  return (
    <div className='w-[95%] mx-auto h-screen overflow-y-scroll'>
      <StyleProvider hashPriority='high'>
      <div className="relative flex items-center justify-start   h-14  mx-auto mt-5 mb-12 bg-white rounded-md shadow-lg xl:h-20 xl:justify-between  lg:h-16  ">
        <div className="flex items-center">
          <div className="">
            <label className="absolute left-8 top-[16px] xl:top-[30px]" htmlFor="search">
              <IoSearch size={20} />
            </label>
            <input
              type="text"
              name="search"
              className=" opacity-0 w-4 xl:w-44 xl:opacity-100 h-9 ml-16 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="mr-3 flex items-center">
            <div className="icons mx-2 cursor-pointer">
              <Button
                onClick={() => navigate("/")}
                className="flex items-center"
                size="large"
              >
                Website
              </Button>
            </div>
            <div>
              <Button  size="large">Reports</Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around  mr-6">
          <div className="px-4">{`${dayOfWeek} [${year}]`}</div>
          <div className="mx-7 relative cursor-pointer">
            <IoChatbubbleEllipsesSharp size={25} />
            <span className="absolute rounded-3xl bg-red-500 px-1 top-0 -right-2 text-xs text-center">
              0
            </span>
          </div>
          <div className="relative pr-6 cursor-pointer">
            <FaBell size={25} />
            <span className="absolute rounded-3xl bg-red-500 px-1 top-0 right-5 text-xs text-center">
              0
            </span>
          </div>
          <Avatar
          className=" cursor-pointer"
          >
            Trung
          </Avatar>
        </div>
      </div>
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
      </StyleProvider>
    </div>
  )
}
