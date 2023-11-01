import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/MainSlide.css";
import { Link } from "react-router-dom";

const SlideShow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="mainSlide">
      <div className="previousButton">
        <button onClick={handlePrevClick}>
          {" "}
          <h3>&lt;</h3>{" "}
        </button>
      </div>
      <div
        className="imgDiv"
        style={{
          backgroundColor:
            currentImageIndex === 0
              ? "rgb(174, 218, 191)"
              : currentImageIndex === 1
              ? "white"
              : currentImageIndex === 2
              ? "rgb(233, 149, 189)"
              : "",
        }}
      >
        <div className="imgDiv-sub">
          {currentImageIndex === 0 && (
            <div>
              <p>환장할 진심</p>
              <p>화요일 ~ 금요일(19:30), 토요일 ~ 일요일(15:00,18:00)</p>
              <p>씨어터 쿰 (씨어터 쿰)</p>
            </div>
          )}
          {currentImageIndex === 1 && (
            <div>
              <p>괴물 [대학로]</p>
              <p>화요일 ~ 금요일(20:00), 토요일(16:30), 일요일(15:00)</p>
              <p>대학로단막극장 (대학로단막극장)</p>
            </div>
          )}
          {currentImageIndex === 2 && (
            <div>
              <p>인사이드미</p>
              <p>화요일 ~ 금요일(19:30), 토요일(15:00,19:00), 일요일(15:00)</p>
              <p>JTN 아트홀(구. 대학로예술마당) (2관)</p>
            </div>
          )}
        </div>
        <img src={images[currentImageIndex]} alt="Slide" />
      </div>

      <div className="nextButton">
        <button onClick={handleNextClick}>
          {" "}
          <h3>&gt;</h3>{" "}
        </button>
      </div>
    </div>
  );
};

const SlideShowContainer = ({
  setMenuNumber,
  setClicked,
  setLocation,
  location,
}) => {
  const [showData, setShowData] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [rankList, setRankList] = useState([]);
  const [notices, setNotices] = useState([]);
  const [faq, setFaq] = useState([]);
  const [selectedRankPoster, setSelectedRankPoster] = useState(0);
  const [noticeOption, setNoticeOption] = useState(0);
  const slideImageUrls = [
    ["http://www.kopis.or.kr/upload/pfmPoster/PF_PF226641_230925_144508.gif"],
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF227080_231005_144935.gif",
    "http://www.kopis.or.kr/upload/pfmPoster/PF_PF226888_231004_094736.gif",
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getDB`)
      .then((response) => {
        setShowData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getRank`)
      .then((response) => {
        setRankList(response.data);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/getNotice`)
      .then((response) => {
        setNotices(response.data);
      });

    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/getFAQs`)
    .then((response) => {
      setFaq(response.data);
    })

  }, []);

  const location_button = (e) => {
    setMenuNumber(1);
    setClicked(e.target.value);
    const locationArray = e.target.value.split(",");
    setLocation(locationArray);
  };

  const hover_rank = (index) => {
    setSelectedRankPoster(index);
  };

  const handleNoticeOption = (index) => {
    setNoticeOption(index);
  }

  return (
    <div>
      <SlideShow images={slideImageUrls} />
      <div className="main-container">
        <div className="main-box">
          <div className="select-classify">
            <span>
              <strong style={{ color: "gray" }}>연극</strong>
            </span>
            <span
              className="select-classify-right-span"
              style={{ color: "gray" }}
            >
              {showData.length}개 상영중
            </span>
            <hr />
            <p>
              <a href="#tag1">
                <button>전체</button>
              </a>
            </p>
            <div>
              <button
                onClick={() => {
                  setShowMap(!showMap);
                  setShowDate(false);
                }}
              >
                지역별 예매
              </button>
            </div>
            <p>
              <Link to={`/dateList`}>
                <button>날짜별 예매</button>
              </Link>
            </p>
          </div>
          <div
            className="mapDiv"
            style={{ visibility: showMap ? "visible" : "hidden" }}
          >
            <img id="map_img" src="img/korea_map.jpg" alt="map" />
            <button id="seoul" value="11" onClick={location_button}>
              서울
            </button>
            <button id="gyeong-gi" value="28,41" onClick={location_button}>
              경기도
            </button>
            <button id="incheon" value="28,41" onClick={location_button}>
              인천
            </button>
            <button id="gyeong-buk" value="27,47" onClick={location_button}>
              경상북도
            </button>
            <button id="gyeong-nam" value="26,48" onClick={location_button}>
              경상남도
            </button>
            <button id="daegu" value="27,47" onClick={location_button}>
              대구
            </button>
            <button id="busan" value="26,48" onClick={location_button}>
              부산
            </button>
            <button id="gwangju" value="29,45,46" onClick={location_button}>
              광주
            </button>
            <button id="jelloa" value="29,45,46" onClick={location_button}>
              전라도
            </button>
            <button id="jeju" value="50" onClick={location_button}>
              제주
            </button>
          </div>
        </div>

        <div className="rank-box">
          예매 순위
          <hr />
          {rankList.map((data, index) => (
            <div className="rank-detail" onMouseEnter={() => hover_rank(index)}>
              <div
                className="rank-detail-number"
                style={{ backgroundColor: index === 0 ? "red" : "gray" }}
              >
                {index + 1}
              </div>
              <div className="rank-detail-name">
                <Link
                  to={
                    window.sessionStorage.getItem("id")
                      ? `/reservation/${data.show_ID}/${data.show_time}`
                      : "/login"
                  }
                  className="rank-link"
                >
                  {data.show_name}
                </Link>
              </div>
            </div>
          ))}
          <div className="rank-image">
            {rankList.length > 0 && (
              <img
                src={rankList[selectedRankPoster].poster_url}
                alt="공연이미지"
              ></img>
            )}
          </div>
        </div>

        <div className="mainslide-notice">
          <span style={{padding:'0 30px'}} onClick={() => handleNoticeOption(0)}>공지사항</span>
          <span style={{padding:'0 40px'}} onClick={() => handleNoticeOption(1)}>FAQ</span>
          <hr />
          {noticeOption===0 && notices.slice(0,7)
          .map((datas, index) => (
            <div className="notice-box">
              <div className="notice-box-left">           
                <Link to = "/mypage/notice" className="notice-link">{datas.title}</Link>
              </div>
              <div className="notice-box-right">
              {new Date(new Date(datas.date).getTime() + 9 * 60 * 60 * 1000)
                      .toISOString().split("T")[0]}
              </div>
            </div>
          ))}
          {noticeOption===1 && faq.slice(0,7)
          .map((datas, index) => (
            <div className="notice-box">
              <div className="notice-box-left">           
                <Link to = "/mypage" className="notice-link">{datas.question}</Link>
              </div>
              <div className="notice-box-right">
              {datas.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="show-list-title">
        <a id="tag1" href>
          <h1>연극목록</h1>
        </a>
      </div>
      <div className="show-list">
        <div className="show-main">
          {showData.map((datas, index) => (
            <div className="main-list">
              <div className="mainslide-show-info">
                <p>
                  <Link
                    to={
                      window.sessionStorage.getItem("id")
                        ? `/reservation/${datas.show_ID}/${datas.show_time}`
                        : "/login"
                    }
                  >
                    <img src={datas.poster_url} alt="공연포스터" />
                  </Link>
                </p>
                <div className="info-title">
                  <strong>{datas.show_name}</strong>
                </div>
                <div className="info-location">
                  <strong>{datas.show_location}</strong>
                </div>
                <div className="info-time">
                  <strong>{datas.show_time}</strong>
                </div>
              </div>
              <hr className="hr" />
            </div>
          ))}
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default SlideShowContainer;
