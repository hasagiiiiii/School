import React from "react";
import Australia from "../assets/Country/australia.png";
import Canada from "../assets/Country/canda.png";
import Italy from "../assets/Country/italy.png";
import VietNam from "../assets/Country/vietnam.png";
import USA from "../assets/Country/usa.png";
import Span from "../assets/Country/span.png";
import Swideen from "../assets/Country/swideen.png";
export const ContryContext = React.createContext();
const ContryProvider = ({ children }) => {
  const CountryItem = [
    { img: Australia, name: "Australia" },
    { img: Canada, name: "Canada" },
    { img: Italy, name: "Italy" },
    { img: VietNam, name: "VietNam" },
    { img: USA, name: "USA" },
    { img: Span, name: "Span" },
    { img: Swideen, name: "Swideen" },
  ];
  return (
    <ContryContext.Provider value={{ CountryItem }}>
      {children}
    </ContryContext.Provider>
  );
};

export default ContryProvider;
