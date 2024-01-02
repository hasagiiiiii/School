import React from "react";
import "./index.scss";
import { ImgContext } from "../../../../Context/ImgConText";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
const Feature = () => {
  const { imgBoxItem } = React.useContext(ImgContext);
  return (
    <div className="feature">
      <div className="custom-container">
        <div className="row">
          {imgBoxItem.map((item, index) => (
            <div className="col-3" key={index}>
              <div className="box-items">
                <div className="icons">
                  <img src={item.img} alt="" />
                </div>
                <h2>{item.logan}</h2>
                <p className="content">{item.content}</p>
                <Link to="">
                  Learn More <MdChevronRight size={30} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
