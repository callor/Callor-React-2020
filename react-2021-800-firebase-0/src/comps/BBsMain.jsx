import React, { useCallback, useEffect, useState } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";
import { useHistory } from "react-router-dom";

function BBsMain() {
    const history = useHistory();
    const [bbsData, setBBsData] = useState([]);
    const firebaseFetch = useCallback(async () => {
        const result = await firestore
            .collection("bbs")
            .orderBy("b_date", "desc")
            .orderBy("b_time", "desc")
            .get();

        const r = result.docs.map((doc) => {
            console.log(doc.id, doc.data().b_date);
            return { ...doc.data(), id: doc.id };
        });
        setBBsData(r);
    });
    useEffect(firebaseFetch, []);

    return (
        <table className="bbs_list">
            <thead>
                <tr>
                    <th>작성일자</th>
                    <th>작성시각</th>
                    <th>작성자</th>
                    <th>제목({bbsData.length}</th>
                </tr>
            </thead>
            <tbody>
                {bbsData.map((bbs) => {
                    return (
                        <tr
                            key={bbs.id}
                            data-id={bbs.id}
                            onClick={(e) => {
                                alert(e.target.closest("TR").dataset.id);
                                history.push(
                                    `/write/${
                                        e.target.closest("TR").dataset.id
                                    }`
                                );
                            }}
                        >
                            <td>{bbs.b_date}</td>
                            <td>{bbs.b_time}</td>
                            <td>{bbs.b_writer}</td>
                            <td>{bbs.b_subject}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default BBsMain;
