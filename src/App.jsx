import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import "./App.scss";
import ImgConTextProvider from "./Context/ImgConText";
import ContryProvider from "./Context/ContryContext";
const App = () => {
  return (
    <div className="page-wapper">
      <BrowserRouter basename="">
        <ImgConTextProvider>
          <ContryProvider>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </ContryProvider>
        </ImgConTextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
