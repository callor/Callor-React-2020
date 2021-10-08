import "../css/GoogleButton.css";
import { useEffect, useRef, useState } from "react";

function GoogleButton() {
    const googleLoginBtn = useRef(null);
    const [auth2, setAuth2] = useState("");
    const [googleUser, setGoogleUser] = useState("");
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://apis.google.com/js/platform.js?onload=renderButton`;
        script.type = "text/javascript";
        script.async = "defer";
        document.head.appendChild(script);
    }, []);

    const googleOkReturn = (user) => {
        // 로그인한 사용자 정보를 googleUser 정보에 저장
        setGoogleUser(user.getBasicProfile());
        console.log("getProfile");
        const profile = user.getBasicProfile();
        console.log(profile);
        console.log(`Token || ${user.getAuthResponse().id_token}`);
        console.log(`ID: ${profile.getId()}`);
        console.log(`Name: ${profile.getName()}`);
        console.log(`Image URL: ${profile.getImageUrl()}`);
        console.log(`Email: ${profile.getEmail()}`);
    };

    const googleSDK_init = async () => {
        console.log("gapi", window.gapi);
        /**
         * windows.gapi 를 사용하기 위하여 index.html에 다음 스크립트를 include 한다
         * script src="https://apis.google.com/js/api:client.js"
         */
        window.gapi.load("auth2", async () => {
            // auth2 = GoogleAuth type 객체
            const auth2 = await window.gapi.auth2.init({
                client_id:
                    "914378613858-5h170in8llkq1i3gdh8ugg4bontble3f.apps.googleusercontent.com",
            });
            console.log("auth2", auth2);
            if (auth2.isSignedIn.get()) {
                console.log("로그인 된 상태");
                // 로그인이 확인되면 auth 정보를 state에 담아둔다
                auth2.attachClickHandler("");
                setAuth2(auth2);
                const user = auth2.currentUser.get();
                setGoogleUser(user);
            } else {
                console.log("로그인 되지 않은 상태");
                // 로그인이 되어 있지 않을 경우 구글 로그인 창 호출하기
                // attachClickHandler(container,paramsOption,onSuccess, onFailure);
                await auth2.attachClickHandler(
                    googleLoginBtn.current,
                    {},
                    googleOkReturn,
                    (err) => alert(JSON.stringify(err, undefined, 2))
                );
            }
        });
    };

    useEffect(googleSDK_init, [googleUser, auth2]);
    const logTitle = auth2.isSignedIn?.get() ? "로그아웃" : "로그인";

    const googleLogout = (e) => {
        // e.stopPropargation();
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2?.disconnect();
        setAuth2("");
        return;
    };

    return (
        <div id="gSignInWrapper">
            <div
                id="customBtn"
                class="customGPlusSignIn"
                ref={auth2.isSignedIn?.get() ? null : googleLoginBtn}
                onClick={auth2.isSignedIn?.get() ? googleLogout : ""}
            >
                <span class="icon"></span>
                <span class="buttonText">Google {logTitle}</span>
            </div>
        </div>
    );
}

export default GoogleButton;
