import React from "react";
import Step1 from "../../../../assets/Step/step-01.png";
import Step2 from "../../../../assets/Step/step-02.png";
import Step3 from "../../../../assets/Step/step-03.png";
import Step4 from "../../../../assets/Step/step-04.png";
import Step5 from "../../../../assets/Step/step-05.png";
import "./index.scss";
const Step = () => {
  return (
    <div className="step">
      <div className="wrap-step">
        <p className="sub-title">STEPS</p>
        <h4 className="title">Steps to Get Your Destination</h4>
        <div className="ul-step-custom">
          <li className="item-step">
            <div className="thumnail">
              <img src={Step1} alt=""></img>
            </div>
            <h6 className="name">
              Identify course <br /> country & collage
            </h6>
          </li>
          <li className="item-step">
            <div className="thumnail">
              <img src={Step2} alt="" />
            </div>
            <h6 className="name">
              science <br /> & professional
            </h6>
          </li>
          <li className="item-step">
            <div className="thumnail">
              <img src={Step3} alt="" />
            </div>
            <h6 className="name">
              Art, Design & <br /> Culture
            </h6>
          </li>
          <li className="item-step">
            <div className="thumnail">
              <img src={Step4} alt="" />
            </div>
            <h6 className="name">
              Business &<br /> Management
            </h6>
          </li>
          <li className="item-step">
            <div className="thumnail">
              <img src={Step5} alt="" />
            </div>
            <h6 className="name">
              Computer <br /> Science & IT
            </h6>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Step;
