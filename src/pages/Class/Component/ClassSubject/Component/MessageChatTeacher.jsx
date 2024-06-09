import { Avatar, Typography } from 'antd'
import React from 'react'

export const MessageChatTeacher = ({text,displayName,createAt,photoURL}) => {
  return (
    <div className='mb-2 m-2 flex bg-white p-3 w-max rounded-xl items-center '>
        <div>
            <Avatar size="default" src={photoURL} >
                {photoURL === null ? displayName.charAt(0).toUpperCase() : ""}
            </Avatar>
            {/* <Typography.Text className='ml-1'>{displayName}</Typography.Text> */}
        </div>
        <div>
            <Typography.Text className='ml-2'>{text}</Typography.Text>
            <Typography.Text className='ml-2 hidden text-xl '>{createAt}</Typography.Text>
        </div>
    </div>
  )
}
