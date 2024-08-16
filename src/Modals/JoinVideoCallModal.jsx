import { MeetingProvider } from "@videosdk.live/react-sdk";
import { Modal } from "antd";
import React from "react";
import { ActiveModalContext } from "../Context/ActiveModal";
import { VideoCallContext } from "../Context/VideoCallContext";
import { authToken } from "../api/api";
import { StateInfo } from "../redux/selector";
import { useSelector } from "react-redux";

const JoinVideoCallModal = () => {
    const [valueInput,setValueInput] = React.useState('')
  const { isOpenJoinCallVideo, setIsOpenJoinCallVideo } =
    React.useContext(ActiveModalContext);
  const { meetingId, MeetingView, Controll, JoinSCreen } =
    React.useContext(VideoCallContext);
  const onCancel = () => {
    setIsOpenJoinCallVideo(false);
  };
  const { fullName, image_User, user_Name, role_School } =
    useSelector(StateInfo);
  const hanldeJoinScreen = (idMeet) => {
    JoinSCreen(idMeet);
  };
  return (
    <Modal
      onCancel={onCancel}
      open={isOpenJoinCallVideo}
      footer={null}
      width={1000}
    >
      {meetingId === null ? (
        <div>
          <input type="text" value={valueInput} onChange={(e)=>setValueInput(e.target.value)} />
          <button onClick={()=>hanldeJoinScreen(valueInput)}>Join</button>
        </div>
      ) : (
        <>
          <div>CallVideoModal</div>
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
            {/* <div className="relative mt-5">
              <Controll />
            </div> */}
          </MeetingProvider>
        </>
      )}
    </Modal>
  );
};

export default JoinVideoCallModal;
