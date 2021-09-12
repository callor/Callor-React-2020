import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAfGVEFTFVqgQ77WhIOtVmyUpaD8YamKRA",
    authDomain: "firenode-dc45c.firebaseapp.com",
    databaseURL: "https://firenode-dc45c.firebaseio.com",
    projectId: "firenode-dc45c",
    storageBucket: "firenode-dc45c.appspot.com",
    messagingSenderId: "275860417400",
    appId: "1:275860417400:web:5641965f490decb00c768d",
};

/*
다른 js 파일에서 fire() 함수를 호출하여
firebase 초기화와 datbase 연동까지 할수 있도록 모듈 구성

firebaseConfig.js 모듈을 여러곳의 Component에서 공유하여
사용할 예정인데 공유하여 사용할경우
firebase.initializeApp() method가 여러번 실행되어
문제를 일이킨다.
그래서 firebase.apps 항목이 이미 있으면 새로생성하지 않고
없으면(!firebase.apps.length) 새로 생성하도록 코드를 변경
*/
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const realDB = firebase.database();
const firestore = firebase.firestore();
const firebaseAuth = firebase.auth();

export { realDB, firestore, firebaseAuth };
