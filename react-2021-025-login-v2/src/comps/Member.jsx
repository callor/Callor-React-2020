import React from "react";

function Member({ roll }) {
    if (!roll || roll !== "ADMIN") {
        alert("관리자만 접근할 수 있는 페이지 입니다");
    }
    return <div></div>;
}

export default Member;
