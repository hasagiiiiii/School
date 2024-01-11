import React from "react";
import { AppContext } from "../../Context/AppContext";
const Overlay = () => {
  const { handleEnabaleScroll } = React.useContext(AppContext);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #00000087",
        zIndex: "-1",
      }}
      onClick={handleEnabaleScroll}
      className="Overlay"
    ></div>
  );
};

export default Overlay;
