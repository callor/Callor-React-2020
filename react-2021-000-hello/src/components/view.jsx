import React from "react";

export default function view(props) {
    const { bbs, b_name } = props;
    return (
        <div>
            <p>{bbs.b_date}</p>
            <p>{bbs.b_time}</p>
            <p>{bbs.b_writer}</p>
            <p>{b_name}</p>
            <p>{bbs.b_subject}</p>
            <p>{bbs.b_content}</p>
        </div>
    );
}
