import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket을 직접 사용하도록 변수 생성하기
function BuckItem({ args, bucket }) {
    const { bucket_edit, bucket_toggle, bucket_complet } = args;

    const [b_edit, setB_Edit] = useState({
        b_title: "",
        isEdit: false,
    });

    const onItemClick = async (e) => {
        const tr = e.currentTarget;
        const b_id = tr.dataset.id;
        const td = e.target;
        // const className = e.target.className;
        const dataColumn = td?.dataset?.column;
        if (dataColumn === "b_title") {
            setB_Edit({ [dataColumn]: bucket.b_title, isEdit: true });
        } else if (dataColumn === "b_flag") {
            await bucket_edit(b_id, dataColumn, bucket.b_flag + 1);
        } else if (dataColumn === "b_end_date") {
            // 완료를 클릭하면
            // 현재 날짜 시간을 표시하여 완료되었음을 나타내기
            const message = bucket.b_end_check
                ? "완료를 취소합니다"
                : "버킷을 완료했나요?";
            if (window.confirm(message)) {
                // bucket_complet(b_id);
                await bucket_complet(b_id);
            }
        } else if (dataColumn === "b_cancel") {
            await bucket_toggle(b_id, dataColumn);
        }
    };

    const bucketKeyDown = async (e) => {
        // console.log(e.keyCode, e.key);
        if (e.keyCode === 13) {
            const b_title = e.target.value;
            const b_id = e.target.closest("TR").dataset.id;
            setB_Edit({ ...b_edit, isEdit: false });
            bucket_edit(b_id, "b_title", b_title);
        } else if (e.keyCode === 27) {
            setB_Edit({ ...b_edit, isEdit: false });
        }
    };

    return (
        <tr
            data-id={bucket.b_id}
            onClick={onItemClick}
            className={bucket.b_cancel ? "cancel" : ""}
        >
            <td data-column="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
            <td data-column="b_start_date">{bucket.b_start_date}</td>

            {b_edit.isEdit ? (
                <td>
                    <input
                        onKeyDown={bucketKeyDown}
                        defaultValue={b_edit.b_title}
                    />
                </td>
            ) : (
                <td data-column="b_title">{bucket.b_title}</td>
            )}
            {bucket.b_end_check ? (
                <td data-column="b_end_date">{bucket.b_end_date}</td>
            ) : (
                <td data-column="b_end_date">◎</td>
            )}
            <td>
                <input
                    data-column="b_cancel"
                    type="checkbox"
                    readOnly
                    checked={bucket?.b_cancel}
                />
            </td>
        </tr>
    );
}

export default BuckItem;
