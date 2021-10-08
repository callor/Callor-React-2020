import { useRef, useState, useEffect } from "react";
import "../css/Google.css";

function Google() {
    const googleLoginBtn = useRef(null);
    const [token, setToken] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://apis.google.com/js/platform.js?onload=renderButton`;
        script.type = "text/javascript";
        script.async = "defer";
        document.head.appendChild(script);
    }, []);

    //SDK 초기 설정 및 내 API초기화

    const googleSDK_init = () => {
        window.googleSDKLoaded = () => {
            console.log(window.gapi);
            window.gapi.load("auth2", () => {
                const auth2 = window.gapi.auth2.init({
                    client_id:
                        "914378613858-5h170in8llkq1i3gdh8ugg4bontble3f.apps.googleusercontent.com",
                });
                //버튼 클릭시 사용자 정보 불러오기
                auth2.attachClickHandler(
                    googleLoginBtn.current,
                    {},
                    (googleUser) => {
                        console.log("getProfile");
                        const profile = googleUser.getBasicProfile();
                        console.log(profile);
                        console.log(
                            `Token || ${googleUser.getAuthResponse().id_token}`
                        );
                        setToken(googleUser.getAuthResponse().id_token);
                        console.log(`ID: ${profile.getId()}`);
                        console.log(`Name: ${profile.getName()}`);
                        console.log(`Image URL: ${profile.getImageUrl()}`);
                        console.log(`Email: ${profile.getEmail()}`);
                    },
                    (error) => {
                        alert(JSON.stringify(error, undefined, 2));
                    }
                );
            });
        };
    };

    const googleSDK = () => {
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
        googleSDK();
    }, []);

    return (
        <div id="gSignInWrapper">
            <span className="label" />
            <div
                ref={googleLoginBtn}
                id="customBtn"
                className="customGPlusSignIn"
            >
                <span className="icon"></span>
                <span className="buttonText">Login with Google</span>
            </div>
        </div>
    );
}

export default Google;
