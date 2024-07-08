import React from 'react'
import { LuClipboardList } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
const Exceries = () => {
  const [active ,setActive] = React.useState(false)
  return (
    <div>
        <div className='w-1/2  mx-auto'>
          <div className='relative mt-3'>
              <button onClick={()=>setActive(!active)} className='text-xl px-5 py-2 bg-blue-500 rounded-3xl text-white'>+ Tạo</button>
              <ul className={`w-[235px] h-max flex flex-col absolute top-14  shadow-viewMenu justify-around p-2 origin-top-left ease-out duration-100 ${active?"scale-100":"scale-0"}`}>
                  <li className='flex items-center '><LuClipboardList color='blue' size={20}/><p className='mx-3 text-lg'> Bài tập</p> </li>
                  <li className='flex items-center '><LuClipboardList color='blue' size={20}/><p className='mx-3 text-lg'> Bài tập</p> </li>
                  <li className='flex items-center '><FaRegQuestionCircle color='blue' size={20}/> <p className='mx-3 text-lg'>Question</p> </li>
                  <li className='flex items-center '><LuClipboardList color='blue' size={20}/><p className='mx-3 text-lg'> Bài tập</p> </li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Exceries