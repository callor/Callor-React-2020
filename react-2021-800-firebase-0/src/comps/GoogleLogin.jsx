import React, { useState } from "react";
// import withFirebaseAuth from "react-with-firebase-auth";
import { firebaseAuth } from "../config/BBSConfig";

function GoogleLogin() {
    const [email, setEmail] = useState("callor@daum.net");
    const [password, setPassword] = useState("changdol88");
    const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)

    const login = async (event) => {
        console.log("login");
        try {
            let data;
            if (newAccount) {
                // create account
                data = await firebaseAuth.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                // login
                data = await firebaseAuth.signInWithEmailAndPassword(
                    email,
                    password
                );
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>로그인하기</h1>
            <button onClick={login} style={{ "backgoud-color": "blue" }}>
                Login
            </button>
        </div>
    );
}

export default GoogleLogin;
