import React from "react";

export const FaqContext = React.createContext();
const FAQ = [
  {
    title: "How is get admission in abroad university?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
  {
    title: "Do you offer complete solution for students?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
  {
    title: "Which country is safe and better for higher study?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
  {
    title: "Which country offer PR after study getting job?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
  {
    title: "Can i get scholarship with my low cGPA?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
  {
    title: "Do you allow accomadation for students in abroad?",
    question:
      "Norway, USA, UK, Germany & Italy is most safest country in the world for Bangladeshi students for higer study.",
  },
];
const FAQProvider = ({ children }) => {
  return <FaqContext.Provider value={{ FAQ }}>{children}</FaqContext.Provider>;
};

export default FAQProvider;
