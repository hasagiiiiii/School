import React from "react";
import "./index.scss";
import { ImgContext } from "../../../../Context/ImgConText";
const Banner = () => {
  const { imgBanner } = React.useContext(ImgContext);
  return (
    <div className="banner-area">
      <div className="container">
        <div className="col-xl-4">
          <p className="sub-title">Special offer first customer</p>
          <h1 className="title">
            You <span>success</span> journey <br />
            start width us!
          </h1>
          <p className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolor soluta tempore eum iusto!
          </p>
          <div className="btn-action">
            <button>Apply Online</button>
            <button>Discover</button>
          </div>
        </div>
        <div className="col-xl-7 banner">
          {imgBanner.map((item, index) => (
            <img loading="lazy" key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
