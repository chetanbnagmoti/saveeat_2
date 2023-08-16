import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemsPage from "./views/ItemsPage/ItemsPage";
import Home from "./views/Home/Home";
import ReportPage from "./views/Reports/ReportPage";

import HelpPage from "./views/Help/HelpPage";
import LoginPage from "./views/Login/LoginPage";
import ProtectedRoutes from "./helpers/ProtectedRoutes";
import MenuPage from "./views/MenuPage/MenuPage";
import CategoryPage from "./views/Category/CategoryPage";
import SettingPage_1 from "./views/Settings/SettingPage-1";
import SettingPage_2 from "./views/Settings/SettingPage-2";



//some changes 


const App = () => {
  return (    
    <>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<ProtectedRoutes> <Home /> </ProtectedRoutes>}></Route>
          <Route path="/items" element={<ProtectedRoutes> <ItemsPage /> </ProtectedRoutes> }></Route>
          <Route path="/menu" element={<ProtectedRoutes><MenuPage/> </ProtectedRoutes> }></Route>
          <Route path="/category" element={<ProtectedRoutes><CategoryPage/> </ProtectedRoutes> }></Route>
          <Route path="/report" element={<ProtectedRoutes><ReportPage /></ProtectedRoutes>}></Route>
          <Route path="/setting-1" element={<ProtectedRoutes><SettingPage_1 /></ProtectedRoutes>}></Route>
          <Route path="/setting-2" element={<ProtectedRoutes><SettingPage_2 /></ProtectedRoutes>}></Route>
          <Route path="/help" element={<ProtectedRoutes><HelpPage /></ProtectedRoutes>}></Route>
          <Route path="*" element={<h1>NOT FOUND \ 404 \ </h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
