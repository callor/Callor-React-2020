import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../config/BBSConfig";

function BBsDetail() {
    const router = useHistory();
    const match = useRouteMatch();
    const docId = match.params.id;

    const [bbs, setBBs] = useState({
        b_writer: "",
        b_subject: "",
        b_content: "",
        b_date: "",
        b_time: "",
    });

    const firebaseFindById = useCallback(async () => {
        console.log(docId);
        if (docId) {
            const result = await firestore.collection("bbs").doc(docId).get();
            console.log(result.data());
            setBBs(result.data());
        }
    }, [docId]);

    useEffect(() => {
        firebaseFindById();
    }, [firebaseFindById]);

    const onDelete = (e) => {
        if (window.confirm("삭제할까요")) {
            if (docId) {
                firestore
                    .collection("bbs")
                    .doc(docId)
                    .delete()
                    .then((result) => {
                        router.push("/");
                    });
            } else {
                router.push(`/detail/${docId}`);
            }
        }
    };

    return (
        <div className="bbs_detail">
            <div>
                <label>작성일자</label>
                <span>{bbs.b_date}</span>
            </div>
            <div>
                <label>작성시각</label>
                <span>{bbs.b_time}</span>
            </div>
            <div>
                <label>글쓴이</label>
                <span>{bbs.b_writer}</span>
            </div>
            <div>
                <label>제목</label>
                <span>{bbs.b_subject}</span>
            </div>
            <div>
                <label>내용</label>
                <span>{bbs.b_content}</span>
            </div>
            <div className="btn_box">
                <button onClick={() => router.push("/")}>처음으로</button>
                <button onClick={() => router.push(`/write/${docId}`)}>
                    수정
                </button>
                <button onClick={onDelete}>삭제</button>
            </div>
        </div>
    );
}

export default BBsDetail;
