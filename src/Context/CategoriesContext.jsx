import React from "react";
import art from "../assets/Categories/art.png";
import book from "../assets/Categories/book.png";
import business from "../assets/Categories/business.png";
import click from "../assets/Categories/click.png";
import enverment from "../assets/Categories/enverment.png";
import firstaidkit from "../assets/Categories/first-aid-kit.png";
import foresty from "../assets/Categories/foresty.png";
import frenchfry from "../assets/Categories/french-fry.png";
import humanity from "../assets/Categories/humanity.png";
import law from "../assets/Categories/law.png";
import newspaper from "../assets/Categories/news-paper.png";
import pc from "../assets/Categories/pc.png";
import recicle from "../assets/Categories/recicle.png";
import secience from "../assets/Categories/science.png";

export const CategoriesContext = React.createContext();
const CategoriesProvider = ({ children }) => {
  const listCategories = [
    { img: art, name: "Art & Design" },
    { img: book, name: "Education & Traning" },
    { img: business, name: "Business & Managerment" },
    { img: click, name: "Engeneering & Technology" },
    { img: enverment, name: "Social Science" },
    { img: firstaidkit, name: "Medicin & Health" },
    { img: foresty, name: "Agriculture & Foresty" },
    { img: frenchfry, name: "Hopitality & Sports" },
    { img: humanity, name: "Humanities" },
    { img: law, name: "Law" },
    { img: newspaper, name: "Journalism & Media" },
    { img: pc, name: "Computer Science & IT" },
    { img: recicle, name: "Enviromental Studies" },
    { img: secience, name: "science & professional" },
  ];
  const CategoriesRevert = listCategories.slice().reverse();
  return (
    <CategoriesContext.Provider value={{ listCategories, CategoriesRevert }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
