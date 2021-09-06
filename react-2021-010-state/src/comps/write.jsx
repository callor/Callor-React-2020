import React from "react";

const write = ({ bbs, bbsChange }) => {
    return (
        <div className="bbs_write_form">
            <div>
                <label htmlFor="">작성일자</label>
                <input
                    name="b_date"
                    type="date"
                    defaultValue={bbs.b_date}
                    onChange={bbsChange}
                />
            </div>
            <div>
                <label htmlFor="">작성시각</label>
                <input
                    name="b_time"
                    type="time"
                    defaultValue={bbs.b_time}
                    onChange={bbsChange}
                />
            </div>
            <div>
                <label htmlFor="">작성자</label>
                <input
                    name="b_writer"
                    defaultValue={bbs.b_writer}
                    onChange={bbsChange}
                />
            </div>
            <div>
                <label htmlFor="">제목</label>
                <input
                    name="b_subject"
                    defaultValue={bbs.b_subject}
                    onChange={bbsChange}
                />
            </div>
            <div>
                <label htmlFor="">내용</label>
                <input
                    name="b_content"
                    defaultValue={bbs.b_content}
                    onChange={bbsChange}
                />
            </div>
        </div>
    );
};

export default write;
