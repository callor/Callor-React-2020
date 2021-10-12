import "../css/GoogleButton.css";
import { useEffect, useRef, useState } from "react";

function GoogleButton({ googleUser, setGoogleUser }) {
    const googleLoginBtn = useRef(null);
    // const [googleUser, setGoogleUser] = useState("");
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = `https://apis.google.com/js/platform.js?onload=renderButton`;
    //     script.type = "text/javascript";
    //     script.async = "defer";
    //     document.head.appendChild(script);
    // }, []);

    const googleOkReturn = (googleUser) => {
        // 로그인한 사용자 정보를 googleUser 정보에 저장

        const profile = googleUser.getBasicProfile();
        console.log("profile", profile);
        console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
        console.log(`ID: ${profile.getId()}`);
        console.log(`Name: ${profile.getName()}`);
        console.log(`Image URL: ${profile.getImageUrl()}`);
        console.log(`Email: ${profile.getEmail()}`);

        const user = {
            userid: profile.getId(),
            name: profile.getName(),
            image: profile.getImageUrl(),
            email: profile.getEmail(),
        };
        setGoogleUser(user);
    };

    const googleSDK_init = () => {
        // console.log("gapi", window.gapi);
        /**
         * windows.gapi 를 사용하기 위하여 index.html에 다음 스크립트를 include 한다
         * script src="https://apis.google.com/js/api:client.js"
         */
        if (!window.gapi) {
            alert("google API Not found");
            return;
        }
        window.gapi.load("auth2", async () => {
            // auth2 = GoogleAuth type 객체
            const auth2 = await window.gapi.auth2.init({
                client_id:
                    "914378613858-5h170in8llkq1i3gdh8ugg4bontble3f.apps.googleusercontent.com",
                scope: "profile email",
            });
            // console.log("auth2", auth2);
            if (auth2.isSignedIn.get()) {
                console.log("로그인 된 상태");
                const user = auth2.currentUser.get();
                googleOkReturn(user);
            }
            await auth2.attachClickHandler(
                googleLoginBtn.current,
                {},
                googleOkReturn,
                (err) => alert(JSON.stringify(err, undefined, 2))
            );
        });
    };

    const googleSDKLoaded = () => {
        //구글 SDK 불러오기
        (function (doc, script, id) {
            let js;
            const fjs = doc.getElementsByTagName(script)[0];
            if (doc.getElementById(id)) {
                return;
            }
            js = doc.createElement(script);
            js.id = id;
            js.src =
                "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "google-jssdk");
    };

    useEffect(() => {
        googleSDK_init();
        googleSDKLoaded();
    }, []);

    // console.log(googleUser);
    const logTitle = googleUser?.name ? googleUser?.name : "로그인";

    const googleLogout = (e) => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2?.disconnect();
        setGoogleUser("");
        console.log("logout");
        e.stopPropagation();
        // e.stopImmediatePropagation();
        return;
    };

    return (
        <div id="gSignInWrapper">
            <div id="customBtn" class="customGPlusSignIn" ref={googleLoginBtn}>
                <span class="icon"></span>
                <span class="buttonText">Google {logTitle}</span>
            </div>
        </div>
    );
}

export default GoogleButton;
