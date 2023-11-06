import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InquiryContactForm from "./InquiryPopUp"; 
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "./fetchLoginUser";
import InquiryAnswer from "./inquiry_answer";



function InquiryContactUs() {
  const [inquiries, setInquiries] = useState([]); // 1:1 문의 목록
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const inquiriesPerPage = 10; // 한 페이지에 보여질 1:1 문의 수
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();
  
  const OpenInquiryAnswerClick = (inquiry) => {
    navigate(`/mypageremake/Inquiry/${inquiry.ID}`, { state: { selectedInquiry: inquiry } });
    
  };

  useEffect(() => {
    // 사용자 정보를 가져오는 비동기 함수
    async function fetchUser() {
      const userId = window.sessionStorage.getItem("id") // 현재 로그인한 사용자의 ID를 어떻게 가져올지에 따라 수정

      const user = await fetchUserInfo(userId); // fetchUserInfo 함수를 사용하여 사용자 정보 가져오기
      setUserInfo(user);
    }

    fetchUser();
  }, []);

 

 

  useEffect(() => {
    async function fetchInquiries() {
      if(userInfo && userInfo.ID) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/getpersonal_inquiry?userID=${userInfo.ID}`
        ); // API 엔드포인트에 따라 수정
        if (response.ok) {
          const data = await response.json();

          const filteredData = data.filter(item => item.userID === userInfo.ID);

           filteredData.sort((a, b) => new Date(b.inquiry_date) - new Date(a.inquiry_date));
        setInquiries(filteredData);
        }
      } catch (error) {
        console.error("문의 데이터를 가져오는 중 오류 발생:", error);
        console.log()
      }
    }
    }
    fetchInquiries();
  }, [userInfo]);

 

  

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastInquiry = currentPage * inquiriesPerPage;
  const indexOfFirstInquiry = indexOfLastInquiry - inquiriesPerPage;
  const currentInquiries = inquiries.slice(
    indexOfFirstInquiry,
    indexOfLastInquiry
  );


  const openPopup = () => {
    const popupWindow = window.open(
      "",
      "팝업 제목",
      "width=800,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no"
    );

    // 팝업 윈도우에 React 컴포넌트 렌더링
    popupWindow.document.body.innerHTML = "<div id='popup-root'></div>";
    popupWindow.document.head.innerHTML += `
  <style>
    .ContactForm {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 2px 2px 5px #888;
    }

    .input-field {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .text-area {
      width: 100%;
      height: 150px;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .submit-button {
      background-color: black;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 16px;
    }

    .submit-button:hover {
      background-color: #0056b3;
    }
  </style>
`;
    ReactDOM.render(
      <InquiryContactForm onClose={popupWindow.close} />,
      popupWindow.document.getElementById("popup-root")
    );
  };
  useEffect(() => {
    if (!window.sessionStorage.getItem('id')) {
      // Display an alert with a message
      window.alert("로그인이 필요합니다.");
      
      // Navigate to the login page
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="ContactUs">
      {userInfo ? (
      <div style={{ borderBottom: "2px solid #ccc" }}>
        <h3
          style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "50px" }}
        >
          1:1 문의
        </h3>
        <h5>
          {" "}
          자세한 문의는 <span style={{ color: "red" }}>문의하기</span>를 통해
          가능합니다.{" "}
        </h5>
        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: "40px", marginBottom: "30px" }}
        >
          <Button
            sx={{ padding: "15px", backgroundColor: "black" }}
            variant="contained"
            onClick={openPopup}
          >
            문의하기
          </Button>
        </Stack>
        <h5>문의 답변의 기간은 1~2일정도 소요될 수 있습니다. </h5>
      </div>
      ) : (
        <p>로그인이 필요합니다</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <h4>문의 내용을 클릭하여 답변을 확인하세요.</h4>
      </div>
      <div>
        <table className="ContactUsInfo">
          <thead>
            <tr>
              <th>문의 제목</th>
              <th>문의 내용</th>
              <th>문의 일자</th>
            </tr>
          </thead>
          <tbody>
            {currentInquiries.length === 0 ? (
              <tr>
                <td colSpan="3">문의 내역이 없습니다.</td>
              </tr>
            ) : (
              currentInquiries.map((inquiry, index) => (
                <tr key={index}>
                  <td className="hover_underline" style={{textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap", maxHeight:"200px", maxWidth:"200px"}}><span style={{cursor:"pointer"}} onClick={() => OpenInquiryAnswerClick(inquiry)}>{inquiry.inquiry_title}</span></td>
                  <td style={{textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap", maxHeight:"200px", maxWidth:"200px"}}>{inquiry.inquiry_content}</td>
                  <td>
                  {new Date(new Date(inquiry.inquiry_date).getTime() + 9 * 60 * 60 * 1000)
                      .toISOString().split("T")[0]} 
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="Pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(inquiries.length / inquiriesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </div>
      {selectedInquiry && (
        <InquiryAnswer inquiry={selectedInquiry} />
      )}
    </div>
  );
}

export default InquiryContactUs;
