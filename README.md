# MultiCampus PROJECT(금융데이터 기반 티켓 할인 구매 시스템)

티켓 구매와 금융 데이터를 접목하여 구매 시 카드사별 할인 혜택을 제공하고,<br/>
지역별, 날짜별로 어떤 공연이 관람 가능한지 바로 구별할 수 있도록 도움을 주어<br/>
남녀노소 언제든 문화생활에 쉽게 접근할 수 있는 웹페이지를 구현하기로 하였습니다.<br/> 

또한 관리자가 페이지를 관리함에 용이하도록 관리자계정으로 로그인 시, 관리자 페이지로 이동되어<br/>
데이터베이스와 연결되어 있는 회원관리, 공지사항, FAQ, 할인율 조정을 손쉽게 확인 및 수정할 수 있도록 하였습니다.<br/><br/>

## 주요기능

- 지역별, 날짜별로 예매 가능합니다.
- 결제시 기기인증 및 은행사별 할인 시스템
- 관리자 페이지에서 회원 정보별 검색이 가능합니다.
- 공지사항, FAQ 수정 및 삭제가 가능합니다.
- 은행사별 할인율 조정이 가능합니다.

TEAM : 고승렬, 손승광, 장우영, 장해민, 최예슬

최종 프로젝트 기간 : 10/4 ~ 11/9

## Getting Started

```sh
npm i
(.../src/server) node server.js
npm start
```

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

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/2f6ebb36-90e9-4103-a562-abbc58298459)

admin 계정으로 로그인 시 보게 되는 화면입니다.

- 회원관리

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/d59869b1-3611-4e1d-b14a-106c62d6365a)

현재까지 가입되어 있는 회원의 ID, 전화번호, 이메일을 보여주며 등급은 일반회원은 1, 관리자는 0으로 지정되어 있습니다.

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/d0722ff4-0b6d-4d18-bfa7-92c395becad1)

아래 검색박스를 통하여 항목 별로 검색이 가능하며 위는 전화 번호 1111을 검색한 결과입니다.
<hr/>

- 공지사항, FAQ
![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/f16c4a22-dc2c-4387-bb5c-2f4105f7b125)
![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/9008c7b1-a8b8-419d-8b5d-430c47418620)

공지사항은 작성, 수정, 삭제가 가능하고 FAQ는 작성과 삭제만이 가능합니다. 위 기능들은 데이터베이스와 연결되어 실시간으로 DB와 메인 페이지에 반영됩니다.

- 공지사항 추가작성

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/7c50cc17-aaa6-4085-94f9-b364451b2d56)

- DB와 메인페이지에 추가된 모습

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/eef4f873-2bb3-40eb-865a-bf1a0fc2829a)

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/087ee7a6-11a3-42c5-bf7a-129956fb98ee)
<hr/>

- 할인율 조정

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/38bf9070-0a89-441b-8264-ea20335460f0)

위에서 작성한대로 수치 수정 시, 실제 결제 페이지에 반영됩니다. 다음은 하나은행 할인율을 30%로 수정한 모습입니다.

![image](https://github.com/luckyotter1/TicketingProject/assets/139444552/246a8091-a5c8-4f9d-b28e-f76bfecc485f)

## DATABASE

![image](https://github.com/team5-ticketingProject/project/assets/139444462/77aa89c0-073a-45b4-961b-9cf4fa581be1)




