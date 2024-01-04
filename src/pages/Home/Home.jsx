import React from "react";
import Banner from "./Component/Banner";
import Feature from "./Component/Feature";
import Feedback from "./Component/Feedback";
import FeedbackModal from "../../Modals/FeedbackModal";
import Country from "./Component/Country";
import Category from "./Component/Categories/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Feedback />
      <FeedbackModal />
      <Country />
      <Category />
    </div>
  );
};

export default Home;
