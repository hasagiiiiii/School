import { Avatar, Typography } from 'antd'
import React from 'react'

const Messages = ({text,displayName,createAt,photoURL}) => {
  return (
    <div className='h-24 border rounded-xl p-3 mt-2 border-b-gray-300'>
        <Avatar size="small" src={photoURL}>{photoURL ? "": displayName?.charAt(0).toUpperCase()}</Avatar>
        <Typography.Text className='ml-1 font-bold'>{displayName}</Typography.Text>
        <Typography.Text className='ml-2'>{text}</Typography.Text>
    </div>
  )
}

export default Messages