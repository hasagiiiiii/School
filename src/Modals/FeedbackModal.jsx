import { Modal } from "antd";
import React from "react";
import { ImgContext } from "../Context/ImgConText";
const FeedbackModal = () => {
  const videoRef = React.useRef(null);
  const { isFeedbackVisible, setFeedbackVisible, URLFeedback } =
    React.useContext(ImgContext);

  const onCancel = () => {
    setFeedbackVisible(false);
    videoRef.current.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  };
  return (
    <Modal
      visible={isFeedbackVisible}
      onCancel={onCancel}
      onOk={onCancel}
      footer={null}
      width={900}
    >
      <iframe
        ref={videoRef}
        width="560"
        height="315"
        src={URLFeedback}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </Modal>
  );
};

export default FeedbackModal;
