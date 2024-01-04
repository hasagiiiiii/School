import React from "react";
import { ContryContext } from "../../../../Context/ContryContext";
import mountant from "../../../../assets/mountant.png";
import plane from "../../../../assets/plane-red.png";
import "./index.scss";
const Country = () => {
  const { CountryItem } = React.useContext(ContryContext);
  return (
    <div className="country">
      <div className="content-country">
        <h1 className="title">Top Destinations</h1>
        <p className="sub-title">
          We have quality partners in variety of destinations around the globe.
        </p>
      </div>
      <div className="list-country">
        {CountryItem.map((item, index) => (
          <div key={index} className="country-items">
            <div className="thumnail">
              <img src={item.img} alt="" />
            </div>
            <h6 className="name">{item.name}</h6>
          </div>
        ))}
      </div>
      <button>Apply Online</button>
      <img src={mountant} className="mountan" alt="" />
      <img src={plane} className="plane" alt="" />
    </div>
  );
};

export default Country;
