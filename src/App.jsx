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
import { ShowClass } from "./pages/Department/ShowClass.jsx";
import { OverView } from "./pages/Department/OverView/index.jsx";
import HomeIndex from "./pages/HomeIndex/index.jsx";
import HomeGuest from "./pages/HomeIndex/Component/HomeIndex/index.jsx";
import Calenda from "./pages/HomeIndex/Component/Calendar/index.jsx";
import CalendaModal from "./Modals/CalendaModal.jsx";
import { RegisterModal } from "./Modals/RegisterModal.jsx";
import OverviewClassSubject from "./pages/Class/Component/ClassSubject/OverviewClassSubject.jsx";
import News from "./pages/Class/Component/ClassSubject/Component/News.jsx";
import Chat from "./pages/Class/Component/ClassSubject/Component/Chat.jsx";
import OverViewClassSubjectStudent from "./pages/HomeIndex/Component/ClassSubjectStudent/OverViewClassSubjectStudent.jsx";
import Attendance from "./pages/Class/Component/ClassSubject/Component/AttendanceTeacher/Attendance.jsx";
import ProfileStudent from "./pages/HomeIndex/Component/ProfileStudent/index.jsx";
import UserClassubject from "./pages/Class/Component/ClassSubject/Component/UserClassubject/UserClassubject.jsx";
import Exceries from "./pages/Class/Component/ClassSubject/Component/Excercies/Exceries.jsx";
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
                      <Route path="/Class/:subjectID" element={<OverviewClassSubject/>}>
                        <Route  index element={<News/>} />
                        <Route path="/Class/:subjectID/Chat" element={<Chat/>} />
                        <Route path="/Class/:subjectID/Attendance" element={<Attendance/>} />
                        <Route path="/Class/:subjectID/Members" element={<UserClassubject/>} />
                        <Route path="/Class/:subjectID/Quest" element={<Exceries/>} />

                      </Route>
                    </Route>
                    <Route path="/Department" element={<Department />}>
                      <Route index element={<OverView/>} />
                      <Route path="/Department/Accounts" element={<ContentDepartment />} />
                      <Route path="/Department/AllClass" element={<ShowClass/>} />
                    </Route>
                    <Route path="/HomeIndex" element={<HomeIndex/>}>
                      <Route index element={<HomeGuest/>} />
                      <Route path="/HomeIndex/Calender" element={<Calenda/>} />
                      <Route path="/HomeIndex/Profile" element={<ProfileStudent/>}/>
                      <Route path="/HomeIndex/:subject" element={<OverViewClassSubjectStudent/>}>
                      </Route>
                    </Route>
                  </Routes>

                  {/*  Start Modal */}
                  <LoginModal />
                  <RegisterModal />
                  <AddClassModal />
                  <AddSubjectModal/>
                  <CalendaModal />
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
