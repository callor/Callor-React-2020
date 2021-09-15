# React Bowling Game

## animation을 위한 react-motion down

-   yarn add react-motion

## react HTTPS 적용하기

-   project root 에 .env.developement 파일 생성하고 다음 내용을 작성
-   .env로 만들면 공통으로 사용되는 환경파일

-   SSL_CRT_FILE, SSL_KEY_FILE 위치를 지정
-   REACT_APP_SSL_CRT_FILE, REACT_APP_SSL_KEY_FILE 도 같이 지정, 어떤게 맞는지 모르것다

HTTPS=true
REACT_APP_SSL_CRT_FILE=C:/perm/callor.com/cert.pem
REACT_APP_SSL_KEY_FILE=C:/perm/callor.com/privkey.pem
SSL_CRT_FILE=C:/perm/callor.com/cert.pem
SSL_KEY_FILE=C:/perm/callor.com/privkey.pem

## env 설정

#### dotenv

-   이러한 환경변수를 효과적으로 관리하기 위해 dotenv 라이브러리가 많이 이용되고있다.
-   CRA에는 dotenv 모듈이 설치 되어있고 .env 파일을 루트 디렉토리에 만들어주기만 하면된다.

#### env 파일 종류

.env - 기본
.env.local - Test를 제외한 모든 환경
.env.development - 개발 환경
.env.test - 테스트 환경
.env.production: 운영 환경
.env.development.local, .env.test.local, .env.production.local은 각 env.\* 를 덮어쓰게 된다.

#### 환경변수명

CRA에서 커스텀 환경변수를 이용하기 위해선 REACT_APP 이라는 접두어를 붙여야 한다.
ex) REACT_APP_API_URL=http://localhost:8080
