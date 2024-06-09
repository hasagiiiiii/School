import React from 'react'
import { LuPenLine } from "react-icons/lu";
import imgBookCup from '../../../../../assets/img_bookclub.jpg'
import BoxCreatePost from '../../../../../Component/BoxCreatePosts';
const News = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div style={{backgroundImage:`url(${imgBookCup})`}} className=' relative w-[90%] h-[250px] rounded-md mt-7 bg-cover bg-no-repeat'>
          <div className='flex - justify-end'>
              <button className='flex items-center text-md py-2 px-4 m-2 mt-4 bg-white rounded-lg'><LuPenLine size={18}/> Tùy Chỉnh</button>
          </div>
          <div className='absolute bottom-0 left-0 text-white p'>
              <h1 className='text-3xl py-4 px-6'>Trung-Tùng</h1>
          </div>
      </div>
      <div className='w-[90%]'><BoxCreatePost /></div>
    </div>
  )
}

export default News