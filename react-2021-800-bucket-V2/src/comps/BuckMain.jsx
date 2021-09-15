import React, { useState, useEffect, useCallback } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";
import uuid from "react-uuid";
import moment from "moment";

function BuckMain() {
    // 버킷리스트를 담을 배열
    const [bucketList, setBuckList] = useState([]);

    // db에 update할 state
    const [updateBucket, setUpdateBucket] = useState({});

    const bucketFetch = useCallback(async () => {
        const res = await fetch("http://localhost:5000/api/get");
        const bucketList = await res.json();
        console.log("BUCKET");
        // console.log(bucket);
        await setBuckList(bucketList);
    }, []);
    useEffect(bucketFetch, [bucketFetch]);

    const buck_insert = async (bucket_text) => {
        const bucket = {
            b_id: uuid(),
            b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
            b_title: bucket_text,
            b_flag: 0,
            b_end_date: "",
            b_end_check: false,
            b_cancel: false,
        };
        // 원래있던 bucketList에 새로운 bucket을 추가하기
        setBuckList([...bucketList, bucket]);
        const fetch_option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bucket),
        };
        try {
            await fetch("http://localhost:5000/api/bucket", fetch_option);
            // await bucketFetch();
        } catch (error) {
            console.log(error);
        }
    };

    const putBucket = async () => {
        console.log(updateBucket);
        const putFetchOption = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBucket),
        };
        const result = await fetch(
            "http://localhost:5000/api/bucket",
            putFetchOption
        );
        console.log(result.json());
    };
    useEffect(putBucket, [updateBucket]);

    const bucket_toggle = (id, column) => {
        const _bucketList = bucketList.map((bucket) => {
            if (bucket.b_id === id) {
                const _temp = { ...bucket, [column]: !bucket[column] };
                setUpdateBucket(_temp);
                return _temp;
            } else {
                return bucket;
            }
        });
        // 원래의 list를 새로운 list로 바꾸기
        setBuckList(_bucketList);
    };

    const bucket_edit = (id, column, value) => {
        const _bucketList = bucketList.map((bucket) => {
            if (bucket.b_id === id) {
                const _temp = { ...bucket, [column]: value };
                setUpdateBucket(_temp);
                return _temp;
            } else {
                return bucket;
            }
        });
        // 원래의 list를 새로운 list로 바꾸기
        setBuckList(_bucketList);
    };

    const bucket_complet = (id) => {
        const _bucketList = bucketList.map((bucket) => {
            if (bucket.b_id === id) {
                return {
                    ...bucket,
                    b_end_date: moment().format("YYYY-MM-DD HH:mm:ss"),
                    b_end_check: !bucket.b_end_check,
                };
            } else {
                return bucket;
            }
        });
        // 원래의 list를 새로운 list로 바꾸기
        setBuckList(_bucketList);
    };

    const args = {
        bucketList: bucketList,
        bucket_edit,
        bucket_toggle,
        bucket_complet,
    };

    return (
        <div className="w3-container w3-margin w3-padding">
            <BuckInput buck_insert={buck_insert} />
            {/* BuckList 컴포넌트에 bucketList 상태(변수) 전달하기  */}
            {/* BucketItem.jsx에서 실행할 flag_change() bucket_update() 함수를 매개변수로 전달하기 */}
            <BuckList args={args} />
        </div>
    );
}

export default BuckMain;
