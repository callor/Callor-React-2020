import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
    const { flag_change, bucket_update, bucket_complet } = args;

    const [b_edit, setB_Edit] = useState({
        b_title: "",
        isEdit: false,
    });

    const onItemClick = (e) => {
        const tr = e.currentTarget;
        const b_id = tr.dataset.id;
        const td = e.target;
        const className = e.target.className;
        if (td.tagName === "TD") {
            if (className.includes("b_title")) {
                setB_Edit({ b_title: bucket.b_title, isEdit: true });
            } else if (className.includes("b_flag")) {
                bucket_update(b_id, "b_flag");
            } else if (className.includes("b_end_date")) {
                // 완료를 클릭하면
                // 현재 날짜 시간을 표시하여 완료되었음을 나타내기
                const message = bucket.b_end_check
                    ? "완료를 취소합니다"
                    : "버킷을 완료했나요?";
                if (window.confirm(message)) {
                    bucket_update(b_id, "b_end_check");
                }
            }
        }
    };

    const bucketKeyDown = (e) => {
        console.log(e.keyCode, e.key);
        if (e.keyCode === 13) {
            const b_title = e.target.value;
            const b_id = e.target.closest("TD").dataset.id;
            setB_Edit({ ...b_edit, isEdit: false });
            bucket_update(b_id, b_title);
        } else if (e.keyCode === 27) {
            setB_Edit({ ...b_edit, isEdit: false });
        }
    };

    return (
        <tr key={bucket.b_id} data-id={bucket.b_id} onClick={onItemClick}>
            <td className="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
            <td className="b_start_date">{bucket.b_start_date}</td>
            <td className="b_title">
                {b_edit.isEdit ? (
                    <input
                        onKeyDown={bucketKeyDown}
                        defaultValue={b_edit.b_title}
                    />
                ) : (
                    <span>{bucket.b_title}</span>
                )}
            </td>
            <td className="b_end_date">{bucket.b_end_date}</td>
            <td className="b_end_check">
                <input type="checkbox" />
            </td>
        </tr>
    );
}

export default BuckItem;
