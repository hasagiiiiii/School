import React from 'react'
import { Modal } from 'antd'
import { ActiveModalContext } from '../Context/ActiveModal'
import { MeetingProvider } from '@videosdk.live/react-sdk'
import { useSelector } from 'react-redux'
import { StateInfo } from '../redux/selector'
import { authToken } from "../api/api";
import { VideoCallContext } from '../Context/VideoCallContext'
const CallVideoModal = () => {
    const {isOpenCallVideo, setIsOpenCallVideo} = React.useContext(ActiveModalContext)
    const {meetingId,MeetingView,Controll} = React.useContext(VideoCallContext)
    const onCancel = ()=>{
        setIsOpenCallVideo(false)
    }
    const { fullName, image_User, user_Name, role_School } =
    useSelector(StateInfo); // lay user Info
    return (
   <Modal
   onCancel={onCancel}
   open={isOpenCallVideo}
   footer={null}
   width={1500}
   className="!top-7"
   >
    <div className='h-screen-minus-300'>
        <h1 className='text-3xl text-center'>CallVideoModal</h1>
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: user_Name,
              }}
              token={authToken}
        >
            <MeetingView />
            {/* <div className='relative mt-5'>
                <Controll/>
            </div> */}
        </MeetingProvider>
    </div>
// </Modal>
  )
}

export default CallVideoModal