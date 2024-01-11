import React from "react";
import FeedbackModal from "../../Modals/FeedbackModal";
import Banner from "./Component/Banner";
import Category from "./Component/Categories/Category";
import Country from "./Component/Country";
import Faq from "./Component/FAQ";
import Feature from "./Component/Feature";
import Feedback from "./Component/Feedback";
import Step from "./Component/Step";
import FAQProvider from "./Component/FAQ/FAQContext";
const Home = () => {
  return (
    <div
      className="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./assets/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: " top center",
      }}
    >
      <Banner />
      <Feature />
      <Feedback />
      <FeedbackModal />
      <Country />
      <Category />
      <Step />
      <FAQProvider>
        <Faq />
      </FAQProvider>
    </div>
  );
};

export default Home;
