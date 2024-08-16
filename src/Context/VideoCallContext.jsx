import React from "react";
import { authToken, createMeeting } from "../api/api";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import { FaMicrophoneSlash, FaSignOutAlt, FaMicrophone } from "react-icons/fa";
import { LuCamera, LuCameraOff } from "react-icons/lu";
import { Button } from "antd";
export const VideoCallContext = React.createContext();
const VideoCallContextProvider = ({ children }) => {
  const [meetingId, setMeetingId] = React.useState(null);
  const [joined, setJoined] = React.useState(null);
  const [isAdminZoom, setIsAdminZoom] = React.useState(false);
  const CreateTokenMeeting = async () => {
    // tạo meet
    const meeting = await createMeeting({ token: authToken }); // tạo phòng meeting mới và lấy id của phòng đó
    setMeetingId(meeting);
    setIsAdminZoom(true); // cập nhật là chủ phòng
  };

  const JoinSCreen = (id) => {
    setMeetingId(id);
    setIsAdminZoom(false);
  };
  const Controll = () => {
    const { leave, toggleMic, toggleWebcam, toggleScreenShare } = useMeeting(); // lấy các chức năng trong useMeeting
    const [activeMic, setActiveMic] = React.useState(true); // set trạng thái bật tắt của mic
    const [activeWebcam, setActiveWebcam] = React.useState(true); // set trạng thái bật tắt của camera
    const hanldeToggleMic = () => {
      setActiveMic(!activeMic);
      toggleMic(); // bật hoặc tắt mic
    };
    const hanldeToggleCamera = () => {
      setActiveWebcam(!activeWebcam);
      toggleWebcam(); // bật hoặc tắt camera
    };
    const hanldeLeaveStream = () => {
      // End the meeting for everyone
      leave();
      toggleMic(false);
      toggleWebcam(false);
      toggleScreenShare(false);
      // Stop all media streams

      // Reset meeting state
      setMeetingId(null);
      setJoined(null);
    };
    return (
      <div className="absolute bottom-0 flex ">
        <Button onClick={() => hanldeLeaveStream()}>
          <FaSignOutAlt size={20} />
        </Button>
        <Button onClick={() => hanldeToggleMic()}>
          {activeMic ? (
            <FaMicrophone size={20} />
          ) : (
            <FaMicrophoneSlash size={20} />
          )}
        </Button>
        <Button onClick={() => hanldeToggleCamera()}>
          {activeWebcam ? <LuCamera size={20} /> : <LuCameraOff size={20} />}
        </Button>
        <Button onClick={() => toggleScreenShare()}>Screen</Button>
      </div>
    );
  };

  const ControlsAdmin = ({
    toggleMic,
    end,
    toggleWebcam,
    toggleScreenShare,
  }) => {
    const [activeMic, setActiveMic] = React.useState(true); // set trạng thái bật tắt của mic
    const [activeWebcam, setActiveWebcam] = React.useState(true); // set trạng thái bật tắt của camera
    const hanldeToggleMic = ()=>{
      setActiveMic(!activeMic)
      toggleMic()
    }
    const hanldeToggleCamera = ()=>{
      setActiveWebcam(!activeWebcam)
      toggleWebcam()
    }
    return (
      <div className="flex items-center justify-around">
        <Button className="w-20 flex items-center justify-center mx-3 px-4 !text-black !bg-blue-500 h-10" type="primary" onClick={() => toggleScreenShare()}>Share</Button>
        {/* <button onClick={() => leave()}>Leave</button> */}
        <Button className="w-20 flex items-center justify-center mx-3 px-4 !text-black !bg-blue-500 h-10" type="primary" onClick={() => hanldeToggleMic()}>{activeMic ? (
            <FaMicrophone size={20} />
          ) : (
            <FaMicrophoneSlash size={20} />
          )}</Button>
        <Button className="w-20 flex items-center justify-center mx-3 px-4 !text-black !bg-blue-500 h-10" type="primary" onClick={() => hanldeToggleCamera()}>{activeWebcam ? <LuCamera size={20} /> : <LuCameraOff size={20} />}</Button>
        <Button className="w-max flex items-center justify-center mx-3 px-4 !text-black h-10" type="primary" danger onClick={() => end()}>End Meeting</Button>
      </div>
    );
  };
  const onMeetingLeave = () => {
    setMeetingId(null);
    setJoined(null);
    window.location.reload()
  };

  const ParticipantView = (props) => {
    console.log(props.participantId)
    const micRef = React.useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
      useParticipant(props.participantId);

    const videoStream = React.useMemo(() => {
      if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);
        return mediaStream;
      }
    }, [webcamStream, webcamOn]);
    React.useEffect(() => {
      const getMicrophoneStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          });
          if (micRef.current) {
            micRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error("Error accessing microphone:", error);
        }
      };

      getMicrophoneStream();
      // console.log(
      //   `Participant ${displayName} micOn: ${micOn}, micStream:`,
      //   micStream
      // );
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);

          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);

    return (
      <div className={`${props.isAdmin ? "w-full":"w-1/3"}`}>
        <p>
          Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
          {micOn ? "ON" : "OFF"}
        </p>
        <audio ref={micRef} autoPlay playsInline muted={isLocal} />

        {webcamOn && (
          <ReactPlayer
            //
            playsinline // extremely crucial prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            // height={"100%"}
            width={props.isAdmin ? "100%" : "30%"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )}
      </div>
    );
  };
  // Hien thi giao dien trinh cua meeting
  const MeetingView = () => {
    const {
      join,
      participants,
      presenterId,
      toggleMic,
      toggleScreenShare,
      toggleWebcam,
      end
    } = useMeeting({
      // callback for when meeting is joined successfully
      onMeetingJoined: () => {
        setJoined("JOINED");
      },
      // call back for whent change speaker
      onSpeakerChanged: (speakerId) => { // bắt sự kiện khi người dùng thay đổi thiết bị speaker
        console.log("activeSpeakerId", speakerId);
      },
      // callback for when meeting is left
      onMeetingLeft: () => { // bắt sự kiện khi người dùng rời đi 
        onMeetingLeave();
      },
    });
    console.log(participants); // lay thong tin nhung nguoi tham gia phong
    const joinMeeting = () => {
      setJoined("JOINING");
      join();
    };

    const endMeeting = () => {
      end(); // Kết thúc cuộc họp
    };
    const toggleParticipantMic = (participantId) => {
      const participant = participants.get(participantId);// lấy người dùng cần thực hiện chức năng tắt mics
      if (participant) {
          participant.toggleMic(false);
      }
  };
  const toggleParticipantWebCame = (participantId)=>{
    const participant = participants.get(participantId); // lấy người dùng cần thực hiện chức năng tắt camera
    if (participant) {
      participant.toggleWebcam(false);
    }
  }
  console.log(...participants)
    return (
      <div>
        <div className="text-center text-2xl"> Meeting Id :{meetingId}</div>
        {joined && joined == "JOINED" ? (
          <div>
            {isAdminZoom ? (
              <ControlsAdmin
                toggleMic={toggleMic}
                end={endMeeting}
                toggleWebcam={toggleWebcam}
                toggleScreenShare={toggleScreenShare}
              />
            ) : (
              <Controll />
            )}
            //For rendering all the participants in the meeting
            <div className="flex">
              <div className="w-2/3 flex items-center">
                {[...participants.keys()].map((participantId) => (
                  <ParticipantView
                    participantId={participantId}
                    key={participantId}
                    isAdmin={isAdminZoom}
                    toggleParticipantMic={toggleParticipantMic}
                    toggleParticipantWebCame={toggleParticipantWebCame}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : joined && joined == "JOINING" ? (
          <p>Joining the meeting...</p>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="text-3xl bg-blue-400 py-3 px-5 rounded-xl"
              onClick={joinMeeting}
            >
              Join
            </button>
          </div>
        )}

        {presenterId && <PresenterView presenterId={presenterId} />}
      </div>
    );
  };
  const PresenterView = ({ presenterId }) => {
    const { screenShareStream, screenShareOn } = useParticipant(presenterId);

    //Creating a media stream from the screen share stream
    const mediaStream = React.useMemo(() => {
      if (screenShareOn && screenShareStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(screenShareStream.track);
        return mediaStream;
      }
    }, [screenShareStream, screenShareOn]);

    return (
      <>
        // playing the media stream in the ReactPlayer
        <ReactPlayer
          //
          playsinline // extremely crucial prop
          playIcon={<></>}
          //
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={mediaStream} // passing mediastream here
          //
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "presenter video error");
          }}
        />
      </>
    );
  };
  return (
    <VideoCallContext.Provider
      value={{
        JoinSCreen,
        Controll,
        CreateTokenMeeting,
        meetingId,
        MeetingView,
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export default VideoCallContextProvider;
