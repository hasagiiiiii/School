import React from "react";
import "./index.scss";
import { FaqContext } from "./FAQContext";
const Faq = () => {
  const { FAQ } = React.useContext(FaqContext);
  return (
    <div className="FAQ-session">
      <div className="wrapper-FAQ">
        <div className="content_left_Faq">
          <p className="sub-title">FAQ</p>
          <h2 className="title">Frequently asked question</h2>
          <p className="description">
            Still do you have any questions to know? Feel free to ask our
            experts here.
          </p>
          <button>Ask Your Question</button>
        </div>
        <div className="content_right_Faq">
          {FAQ.map((ques, index) => (
            <details key={index}>
              <summary>{ques.title}</summary>
              <p>{`${index}. ${ques.question}`}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
