import "../css/GoogleButton.css";
import { useEffect, useRef, useState } from "react";

function GoogleLogoutButton({ googleUser, setGoogleUser }) {
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
            <div
                id="customBtn"
                class="customGPlusSignIn"
                onClick={googleLogout}
            >
                <span class="icon"></span>
                <span class="buttonText">Google 로그아웃</span>
            </div>
        </div>
    );
}

export default GoogleLogoutButton;
