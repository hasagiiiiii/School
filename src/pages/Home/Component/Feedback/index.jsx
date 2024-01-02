import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImgContext } from "../../../../Context/ImgConText";
import "./index.scss";
const Feedback = () => {
  const { FeedbackVideo, setFeedbackVisible } = React.useContext(ImgContext);

  const btnPlay = (url) => {
    setFeedbackVisible(true);
  };
  return (
    <div className="feedback">
      <div className="content-feedback">
        <p className="sub-title">Feedbacks</p>
        <h1>
          Our students shared their <br /> visa success stories
        </h1>
      </div>
      <div className="video-feedback">
        <div className="row">
          {FeedbackVideo.map((feedback, index) => (
            <div key={index} className="box-videos">
              <img src={feedback.imgF} alt="" />
              <button onClick={() => btnPlay(feedback.video)}>
                <FaPlay size={20} />
              </button>
              <p className="content-feedback">{`${feedback.displayName}~ ${feedback.school}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
