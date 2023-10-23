import React, { useState, useEffect } from "react";
import { Routes, Route, } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Main from "./component/Main";
import MyPage from "./component/MyPage";
import Reservation from "./component/Reservation";
import Check from "./component/MyPage_Check";
import MyPageCheck from "./component/MyPage_default_Check";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>      
        <Route path="/login" element={<Login/>} />  
        <Route path="/signup" element={<SignUp/>} />  
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/mypage/check" element={<MyPageCheck/>} />
        <Route path="/reservation/:show_ID" element={<Reservation/>}/>
      </Routes>
    </div>
  );
};

export default App;
