import React from "react";

function view({ bbs }) {
    return (
        <div className="bbs_view">
            <div>
                <label htmlFor="">작성일</label>
                <span>{bbs.b_date}</span>
            </div>
            <div>
                <label htmlFor="">작성시각</label>
                <span>{bbs.b_time}</span>
            </div>
            <div>
                <label htmlFor="">작성자</label>
                <span>{bbs.b_writer}</span>
            </div>
            <div>
                <label htmlFor="">제목</label>
                <span>{bbs.b_subject}</span>
            </div>
            <div>
                <label htmlFor="">내용</label>
                <span>{bbs.b_content}</span>
            </div>
        </div>
    );
}

export default view;
