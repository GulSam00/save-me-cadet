<div align="center">

# 구해줘 카뎃 LMS

![html badge](https://img.shields.io/badge/-HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white)
![css badge](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white)
![JS badge](https://img.shields.io/badge/-Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)

![react badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![react badge](https://img.shields.io/badge/-React%20router%20dom-blue?style=flat-square&logo=React-Router&logoColor=white)
![styled badge](https://img.shields.io/badge/-Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)

![issue](https://img.shields.io/github/issues/saveme-cadet/LMS-Frontend)
![issue](https://img.shields.io/github/issues-closed/saveme-cadet/LMS-Frontend)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/saveme-cadet/LMS-Frontend)

</div>

# 소개

<div align="center">

[![구해줘 카뎃 사이트](https://github.com/saveme-cadet/LMS-Frontend/blob/dev/public/asset/saveme.png?raw=true)](https://www.save9cadet.com/)

</div>

구해줘 카뎃은 체크인과 체크아웃을 진행하며 각자의 학습 시간을 확보하고자 2021년 중순에 만든 동아리입니다.
기존에는 Numbers로 출결을 관리하였지만
반복되는 작업을 자동화함으로써 동아리원의 리소스를 줄이고
스프레드시트의 한계점을 해결하기 위해
구해줘 카뎃 내부에서 팀을 조직해 LMS(Learning Management System)용 웹사이트를 개발하였습니다.
2022년 4월 배포한 후 현재 유지보수 및 기능 추가를 진행하고 있으며 10월에 2차 MVP를 배포하였습니다.

# 프로젝트 시작방법

```shell
npm i && npm run build
```

# 페이지 및 기능

## 로그인

<img width="100%" alt="메인화면" src="https://user-images.githubusercontent.com/22931103/203491879-34b4308d-c887-41be-98c3-b563399f45b2.png">

- 가입하지 않은 사용자라면 회원가입을 진행해야 합니다.
- 정상적으로 ID, 비밀번호를 입력하지 않으면 로그인이 되지 않습니다.
- 로그인 전 버그 발생시 하단에 있는 버그 버튼을 클릭해 개발진에게 버그 리포팅이 가능합니다.
  - 현재 블랙홀이 남은 or 아웃터인 카뎃만 구해줘 카뎃 시스템을 정상적으로 이용 가능합니다.

### 회원가입

<img width="100%" alt="회원가입" src="https://user-images.githubusercontent.com/22931103/203492213-083a7b23-92d3-40eb-b59b-1738df2ea284.png">

- 인트라 아이디와 비밀번호를 입력합니다.
  - 비밀번호를 재설정할 때 해당 인트라 닉네임과 연동된 이메일로 전송됩니다.
  - 비밀번호는 길이 8~30자에 영어 대문자, 영어 소문자, 특수문자, 숫자를 포함해야 합니다.

### 임시 비밀번호 발급하기

<img width="100%" alt="임시 비밀번호 발급" src="https://user-images.githubusercontent.com/22931103/203492217-2573a4fa-4931-42a0-a389-9a1f6112afa9.png">

- 기존에 회원가입을 한 카뎃일 경우 가입시 입력한 아이디(42 intra ID)를 입력해야합니다.
- 정상적으로 아이디를 입력했다면 42 intra에 등록된 이메일로 임시 비밀번호 메일이 발송합니다.

## 메인 페이지

<img width="100%" alt="메인 페이지(출석표)" src="https://user-images.githubusercontent.com/22931103/203492225-0e368e73-c4f2-4198-97fe-d213392054e6.png">

- 메인 페이지에서 출결표를 확인할 수 있습니다.
  - 하루를 기준으로 출결 상태를 보여줍니다.
  - 날짜 옆의 아이콘을 눌러서 다른 날짜로 이동할 수 있습니다.

<p align='center'>
<img width="20%" alt="게더, 비밀번호 초기화, 버그 리포트" src="https://user-images.githubusercontent.com/22931103/203493775-5f0d0b08-3b5f-4ea1-ae75-7de667392b91.png">
</p>

- 모든 페이지에서 게더타운, 비밀번호 초기화, 버그리포트 기능을 사용할 수 있습니다. (왼쪽부터 순서대로)

### 출석표 필터링

<img width="100%" alt="출석표 필터링" src="https://user-images.githubusercontent.com/22931103/203492238-8936418b-5ce6-4a19-96a1-24bd1a4d6e5f.png">

- 출석표의 특정 칼럼만 볼 수 있는 필터링입니다.
  - 로그인한 기기에 종속되기에 다른 기기에서 로그인시 새로 설정을 해줘야 합니다.

### 출결 관리

<img width="100%" alt="체크인, 체크아웃 변경" src="https://user-images.githubusercontent.com/22931103/203492231-6f7abf91-49ee-4dec-9f67-d17bd4052876.png">

- 머슴이라면 체크인, 체크아웃 셀을 클릭해서 출결을 변경할 수 있습니다.
- 이전 달의 정보는 수정할 수 없습니다.
- 필터 기능으로 원치 않은 정보를 보이지 않게 할 수 있습니다.
- 팀별로 조회가 가능합니다.

### 출결 일괄 수정

<p align='center'>
<img width="45%" alt="메인페이지_일괄선택1" src="https://user-images.githubusercontent.com/72376700/203354295-b367b6d3-0808-4669-acbf-9e3a63f48ccb.PNG">
<img width="45%" alt="메인페이지_일괄선택2" src="https://user-images.githubusercontent.com/72376700/203357360-1116a686-4542-4177-afd6-4fb1df2c3244.PNG">
</p>

- 현재 탭(전체, 레드팀, 블루팀) 전체 인원의 체크인, 체크아웃을 한꺼번에 수정할 수 있습니다.
- 일괄 수정 직전의 데이터를 로컬 스토리지로 저장합니다.
  - 저장한 데이터는 하루가 지나면 삭제됩니다.

### 출결 일괄 수정 되돌리기

<img width="100%" alt="메인페이지_일괄선택되돌리기" src="https://user-images.githubusercontent.com/72376700/203359246-536929bc-05a7-4b6a-a8c3-258c9d74efd8.PNG">

- 로컬 스토리지로 저장중인 데이터로 되돌립니다.

### 비밀번호 변경

<img width="100%" alt="비밀번호 변경" src="https://user-images.githubusercontent.com/22931103/203491983-004a5fcf-2eda-41b5-adbd-d034e4efcfa3.png">

- 비밀번호를 변경하고 싶을 때 사용할 수 있습니다.
- 회원가입처럼 비밀번호 변경시 보안을 위해 길이, 대소문자, 특수문자 등 일정 규칙을 만족해야합니다.

## 할 일 페이지

<img width="100%" alt="오늘 할일 페이지" src="https://user-images.githubusercontent.com/22931103/203492247-0f2236cb-8985-40a1-8d5e-726160bd6380.png">

- 오늘 자신이 할 일을 등록합니다.
- 완료 처리하거나 삭제할 수 있습니다.
- 다른 사용자의 할 일을 조회할 수 있습니다.

## 아오지 탄광

<img width="100%" alt="아오지 탄광" src="https://user-images.githubusercontent.com/22931103/203492249-e3759363-99d3-4672-86cf-52e7f3c6761a.png">

- 평일 체크인 이후, 주말에 보충학습을 진행해서 결석 점수를 감소시킬 수 있습니다.
- 보충학습 중 창을 닫아도 정보는 저장됩니다.
- 학습중인 다른 구해줘 카뎃이 누가 있는지 확인할 수 있습니다.
- 현재 몇번째 학습인지, 학습 기록이 진행중인지를 확인할 수 있습니다.

<p align='center'>
  <img width="47%" alt="아오지 로그 수정" src="https://user-images.githubusercontent.com/22931103/203492258-77a06f63-b6fb-45fc-badd-af38d1715b11.png">
  <img width="47%" alt="아오지 로그 삭제" src="https://user-images.githubusercontent.com/22931103/203492263-5bd14664-9708-46de-a9a1-655ffff5aad0.png">
</p>

- 현재 학습중이지 않는 아오지 로그를 수정, 삭제할 수 있습니다.
  - 출석 점수 로직문제로 학습한 당일 아오지 로그만 수정, 삭제할 수 있습니다.
- 수정은 24시간을 넘기면 안되고 시작-종료 시간이 역전되지 않는 등 수정 로직이 존재합니다.

## 머슴 페이지

<p align='center'>
 <img width="47%" alt="권한 없는 경우" src="https://user-images.githubusercontent.com/22931103/203493331-271da492-aec4-4f72-9ed8-d220b619e2f1.png">
 <img width="47%" alt="머슴 페이지" src="https://user-images.githubusercontent.com/22931103/203492266-0066477e-894c-41ce-8f3e-fc3a220f9dff.png">
</p>

- 역할이 머슴인 사람만 이 페이지에 접근할 수 있습니다.
- 사용자의 참여 상태, 팀, 역할, 휴가를 변경할 수 있습니다.

> 기본적으로 머슴 or 관리자(admin)이 아닐 경우 접근 권한이 없다는 경고 페이지(좌측)를 보여준다.

> 자기 자신의 역할을 머슴에서 카뎃으로 변경하게 될 경우 그 즉시 로그아웃하게 됩니다. 변경하기 전 다음 주 머슴의 역할을 변경했는지 꼭 확인해주세요.

### 휴가 변경

<img width="100%" alt="일괄 휴가 변경" src="https://user-images.githubusercontent.com/22931103/203492274-0656e2d1-cf71-46ab-9d87-f425ee4bf5d7.png">

- 참여 상태가 ‘참가’인 사용자들의 휴가를 일괄적으로 증가시키거나 감소시킬 수 있습니다.

### 순위 확인(월렛 보상 대상자)

<img width="100%" alt="월렛 보상 대상 목록" src="https://user-images.githubusercontent.com/22931103/203492288-bc35c841-5170-478d-9d75-4488bd900625.png">

- 이번 달 구해줘 카뎃 참가자들 중 출석 우수자를 조회할 수 있습니다.
  - 출석점수를 비교한 후, 출석점수가 동률이라면 결석점수가 낮은 사람을 우선으로 합니다.
  - 출석점수는 체크인, 체크아웃이 출석인 경우마다 0.5점이 증가합니다.
  - 결석점수는 체크인, 체크아웃이 지각일 경우 0.25점, 결석일 경우 0.5점이 증가합니다. 보충학습으로 결석점수를 차감할 수 있습니다.

> 달이 바뀌게 될 경우 순위가 초기화 되기에 달이 바뀌기 전 꼭 확인해주세요.

### 팀 섞기

<img width="100%" alt="팀 현황 및 팀원 섞기" src="https://user-images.githubusercontent.com/22931103/203492296-738e6a33-a6d7-46dc-b964-e33ee447d827.png">

- 참여 상태가 ‘참가’인 사용자들의 팀을 뒤섞을 수 있습니다.

> 팀을 변경한 후 확인을 누르게 되면 되돌릴 수가 없게 됩니다. 주의해주세요.

### 머슴 가이드

<img width="100%" alt="머슴 가이드" src="https://user-images.githubusercontent.com/22931103/203501412-f9c0cca9-e9c4-481f-b250-fe983376c700.png">

- 구해줘 카뎃에 참가한 사람 중 머슴이 어떤 역할인지 알려주는 가이드입니다.
  - 현재 관리자가 수정할 수 있는 권한이 없기에 개발진에 문의를 넣어야 함.

### 참여 여부

<img width="100%" alt="참여 여부 설정" src="https://user-images.githubusercontent.com/22931103/203492306-d27cb029-2aeb-4df8-b31b-5e720941d57f.png">

- 참여 여부 변경이 기본 팀은 `blue`, 역할은 `일반`으로 설정됩니다.
