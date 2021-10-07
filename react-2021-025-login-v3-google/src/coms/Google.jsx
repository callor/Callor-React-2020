import { useRef, useState, useEffect } from "react";

const GoogleBtn = styled.div`
    #customBtn {
        width: 100%;
        height: 50px;
        border: none;
        margin-bottom: 3px;
        padding-left: 4%;
        display: flex;
        align-items: center;
        background-color: #dd4b39;
    }
    #customBtn:hover {
        cursor: pointer;
    }
    span.label {
        font-family: ${theme.fontContent};
        font-weight: normal;
    }
    span.icon {
        width: 100%;
        background: url("/images/google2.png");
        background-size: 120%;
        background-position: center;
        display: inline-block;
        vertical-align: middle;
        width: 42px;
        height: 42px;
    }
    span.buttonText {
        font-family: ${theme.fontContent};
        font-size: 16px;
        font-weight: bold;
        color: ${theme.white};
    }
`;
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
    const googleSDK = () => {
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
        //구글 SDK 불러오기
        (function (d, s, id) {
            let js;
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src =
                "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "google-jssdk");
    };
    useEffect(() => {
        googleSDK();
    }, []);

    return (
        <GoogleBtn id="gSignInWrapper">
            <span className="label" />
            <div
                ref={googleLoginBtn}
                id="customBtn"
                className="customGPlusSignIn"
            >
                <span className="icon"></span>
                <span className="buttonText">Login with Google</span>
            </div>
        </GoogleBtn>
    );
}

export default Google;
