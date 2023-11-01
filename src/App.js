/* eslint-disable react/jsx-pascal-case */
import { Routes, Route, } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Main from "./component/Main";
import MyPage from "./component/MyPage";
import Reservation from "./component/Reservation";
import Reserve_Calendar from "./component/Reserve_Calendar";
import Test from "./component/Test";
import MemberManagement from './admin/pages/MemberManagement';
import Notice from './admin/pages/Notice';
import Faq from './admin/pages/Faq';
import MypageFaq from './component/Faq';
import DiscountAdjustment from './admin/pages/DiscountAdjustment';
import MyPageCheck from "./component/MyPage_default_Check";
import MyPageNotice from "./component/Mypage_default_Notice";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}/>      
        <Route path="/login" element={<Login/>} />  
        <Route path="/signup" element={<SignUp/>} />  
        <Route path="/mypage" element={<MyPage/>} />  
        <Route path="/reservation/:show_ID/:show_time" element={<Reservation/>}/>
        <Route path='/dateList' element={<Reserve_Calendar/>}/>
        <Route path="/admin/*" element={<Test/>}/>

        <Route path="/member" element={<MemberManagement />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/mypage/check" element={<MyPageCheck/>} />
        <Route path="/mypage/notice" element={<MyPageNotice/>} />
        <Route path="/mypage/faq" element={<MypageFaq/>} />
        <Route path="/discount" element={<DiscountAdjustment />} />

        
      </Routes>
    </div>
  );
};

export default App;
