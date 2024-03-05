import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import "./App.scss";
import ImgConTextProvider from "./Context/ImgConText";
import ContryProvider from "./Context/ContryContext";
import CategoriesProvider from "./Context/CategoriesContext";
import AppProvider from "./Context/AppContext";
import Class from "./pages/Class/Class";
import ClassRoomListProvider from "./Context/ClassRoomListContext";
import Table from "./pages/Class/Component/TableClass";
import LoginModal from "./Modals/LoginModal";
import AddClassModal from "./Modals/AddClassModal";
import AuthProvider from "./Context/AuthProvider";
import ContentDepartment from "./pages/Department/ContentDepartment";
import Department from "./pages/Department/Department";
import { ActiveModalProvider } from "./Context/ActiveModal";
import AddSubjectModal from "./Modals/AddSubjectModal";
import { Schedule } from "./pages/Class/Component/Schedule";
import { Loading } from "./Component/Loading";
const App = () => {
  return (
    <BrowserRouter basename="">
      <AuthProvider>
        <AppProvider>
          <ImgConTextProvider>
            <ContryProvider>
              <CategoriesProvider>
                <ClassRoomListProvider>
                  <ActiveModalProvider>
                  <Routes>
                    <Route path="/" element={<RootLayout />}>
                      <Route index element={<Home />} />
                    </Route>
                    <Route path="/Class" element={<Class />}>
                      <Route index element={<Table />} />
                      <Route path="/Class/Schedule" element={<Schedule/>} />
                    </Route>
                    <Route path="/Department" element={<Department />}>
                      <Route index element={<ContentDepartment />} />
                    </Route>
                  </Routes>

                  {/*  Start Modal */}
                  <LoginModal />
                  <AddClassModal />
                  <AddSubjectModal/>
                  <Loading/>
                  {/* Finish Modal */}
                  </ActiveModalProvider>
                </ClassRoomListProvider>
              </CategoriesProvider>
            </ContryProvider>
          </ImgConTextProvider>
        </AppProvider>
      </AuthProvider>
      {/* Class */}
    </BrowserRouter>
  );
};

export default App;
