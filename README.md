# MultiCampus PROJECT(금융데이터 기반 티켓 할인 구매 시스템)

## PROJECT 소개

티켓 구매와 금융 데이터를 접목하여 구매 시 카드사별 할인 혜택을 제공하고,<br/>
지역별, 날짜별로 어떤 공연이 관람 가능한지 바로 구별할 수 있도록 도움을 주어<br/>
남녀노소 언제든 문화생활에 쉽게 접근할 수 있는 웹페이지를 구현하기로 하였습니다.<br/> 

또한 관리자가 페이지를 관리함에 용이하도록 관리자계정으로 로그인 시, 관리자 페이지로 이동되어<br/>
데이터베이스와 연결되어 있는 회원관리, 공지사항, FAQ, 할인율 조정을 손쉽게 확인 및 수정할 수 있도록 하였습니다.<br/><br/>


TEAM : 고승렬, 손승광, 장우영, 최예슬, 장해민

최종 프로젝트 기간 : 10/4 ~ 11/9

## Stacks

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/VISUAL STUDIO CODE-1572B6?style=for-the-badge&logo=visualstudio&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=PostCSS&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/MATERIAL UI-1572B6?style=for-the-badge&logo=mui&logoColor=white"> 

## 화면 구성

### 메인페이지

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/6163491f-1c55-47de-83a8-a3067033d34f)

첫 접속시 혹은 일반 회원으로 로그인 시 보게 되는 화면입니다.<br/>

- 로그인 페이지

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/c7586c12-339f-476b-aee8-fba9b0c2f98c)

- 회원가입페이지

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/e20e31bc-0cbe-4689-9f14-ef8920b97d74)

- 가입 성공 시

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/9cf69b45-7198-4fb3-bdca-66508587c8f2)

- db에 추가된 'readme' 회원정보

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/3ab40036-f729-4396-9651-b5fe54c7d55c)

회원가입 시 데이터베이스에 회원 정보가 추가되고 이를 통하여 로그인이 가능해집니다.
<hr/>

- 지역별

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/ac8213bc-021e-4f14-85d0-c68aa1d9163f)

- 날짜별

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/1a8a0554-798d-48b5-ac19-4c99e24aa6a8)

메인 화면 좌측에 있는 지역별, 날짜별 예매 버튼을 통하여 원하는 지역에서 원하는 날짜의 공연을 손쉽게 확인할 수 있습니다.
<hr/>
- 예매 페이지

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/745cab3d-848f-464e-9bda-daad62bac04e)

공연 정보를 확인 후 상영 중인 항목을 클릭하면 예매 페이지가 나오며 원하는 날짜, 시간, 인원 수, 좌석, 원하는 은행사 할인을 선택할 수 있습니다.<br/>

위 은행사 할인은 뒤에 나올 관리자 페이지의 할인율 조정 항목에서 10%, 20%, 30%의 수치로 수정 가능합니다.

- mac address 수집

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/51ec5f36-49eb-4bb7-803b-c5e3fd0df1ee)

최초 결제 시 mac address 수집에 동의하여야 합니다.
<hr/>

### 관리자 페이지

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/813948e5-3922-4ac2-8cf9-04b8eeabf19d)

admin 계정으로 로그인 시 보게 되는 화면입니다.

- 회원관리

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/d59869b1-3611-4e1d-b14a-106c62d6365a)

현재까지 가입되어 있는 회원의 ID, 전화번호, 이메일을 보여주며 등급은 일반회원은 1, 관리자는 0으로 지정되어 있습니다.
- 공지사항, FAQ
![image](https://github.com/team5-ticketingProject/project/assets/139444552/8eace09a-aa96-416e-882d-1396a788cbcf)

- 할인율 조정
![image](https://github.com/team5-ticketingProject/project/assets/139444552/3c514e28-13ef-4ef4-ba7a-72aacc95b23b)


## 주요기능

- 지역별로 예매 가능(지정한 지역으로 검색 가능)
- 날짜별로 예매 가능
- 결제시 기기인증 및 금융사별 할인 시스템
- 어드민페이지에서 공지사항, FAQ 수정 및 삭제
- 할인율 조정 가능

## DATABASE

![image](https://github.com/team5-ticketingProject/project/assets/139444462/77aa89c0-073a-45b4-961b-9cf4fa581be1)




