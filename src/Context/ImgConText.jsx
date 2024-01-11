import React from "react";
import HeaderBanner from "../assets/header-img.png";
import Ellipse from "../assets/Ellipse-01.png";
import Location from "../assets/location.png";
import Plane from "../assets/plane.png";
import Vector from "../assets/Vector-15.png";
import Emergency from "../assets/emergency.png";
import idea from "../assets/idea.png";
import coversation from "../assets/coversation.png";
import User from "../assets/user.jpg";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";

export const ImgContext = React.createContext();
const ImgConTextProvider = ({ children }) => {
  const [isFeedbackVisible, setFeedbackVisible] = React.useState(false);
  const [URLFeedback, setURLFeedback] = React.useState(null);
  const imgBanner = [HeaderBanner, Ellipse, Location, Plane, Vector];
  const imgBoxItem = [
    {
      img: idea,
      logan: "One Stop Study Solution",
      content:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
    },
    {
      img: coversation,
      logan: "One To One Discussion",
      content:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
    },
    {
      img: Emergency,
      logan: "End To End Support",
      content:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
    },
  ];
  const FeedbackVideo = [
    {
      imgF: User,
      country: "Việt Nam",
      displayName: "Văn Trung",
      school: "Nguyễn Trãi",
      video: "https://www.youtube.com/embed/QSUrgXh7wp4?si=YSr9NNGj6F1Sg4-G",
    },
    {
      imgF: User,
      country: "Việt Nam",
      displayName: "Văn Trung",
      school: "Nguyễn Trãi",
      video: "https://www.youtube.com/embed/QSUrgXh7wp4?si=YSr9NNGj6F1Sg4-G",
    },
    {
      imgF: User1,
      country: "Việt Nam",
      displayName: "Thanh Tùng",
      school: "Nguyễn Trãi",
      video:
        "https://www.youtube.com/embed/SNnw5sJ4Jp0?si=vh49HYZXdHXhmKBs&amp;start=33",
    },
    {
      imgF: User2,
      country: "Việt Nam",
      displayName: "Việt Hoàng",
      school: "Nguyễn Trãi",
      video: "https://www.youtube.com/embed/QSUrgXh7wp4?si=YSr9NNGj6F1Sg4-G",
    },
  ];
  return (
    <ImgContext.Provider
      value={{
        imgBanner,
        imgBoxItem,
        FeedbackVideo,
        isFeedbackVisible,
        setFeedbackVisible,
        URLFeedback,
        setURLFeedback,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default ImgConTextProvider;
