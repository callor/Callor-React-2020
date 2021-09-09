import React, { useEffect, useState } from "react";
import "../css/BBs.css";
import { firestore } from "../config/BBSConfig";

function BBsMain() {
    const [bbsData, setBBsData] = useState([]);
    const firebaseFetch = async () => {
        const result = await firestore.collection("bbs").get();
        const r = result.docs.map((doc) => {
            return doc.data();
            console.log(doc.id);
            // setBBsData([...bbsData, doc.data()]);
        });
        setBBsData(r);
    };
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
                        <tr key={bbs.id}>
                            <td>{bbs.b_date}</td>
                            <td>{bbs.b_time}</td>
                            <td>{bbs.b_write}</td>
                            <td>{bbs.b_subject}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default BBsMain;
