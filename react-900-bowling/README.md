# React Bowling Game

## animation을 위한 react-motion down

- yarn add react-motion

## react HTTPS 적용하기

- project root 에 .env.developement 파일 생성하고 다음 내용을 작성
- .env로 만들면 공통으로 사용되는 환경파일

- SSL_CRT_FILE, SSL_KEY_FILE 위치를 지정
- REACT_APP_SSL_CRT_FILE, REACT_APP_SSL_KEY_FILE 도 같이 지정, 어떤게 맞는지 모르것다

HTTPS=true
REACT_APP_SSL_CRT_FILE=C:/perm/callor.com/cert.pem
REACT_APP_SSL_KEY_FILE=C:/perm/callor.com/privkey.pem
SSL_CRT_FILE=C:/perm/callor.com/cert.pem
SSL_KEY_FILE=C:/perm/callor.com/privkey.pem
