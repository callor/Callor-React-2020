import React, { Component } from "react";
import { database, firestore } from "../config/FirebaseConfig";
import moment from "moment";
import "moment-timezone";

class BBsWrite extends Component {
    state = {
        seq: "",
        b_write: "",
        b_title: "",
        b_text: "",
    };

    bbsUpdate = () => {
        console.log("update");
    };

    bbsInsert = () => {
        var newKey = this.state.seq;
        if (!newKey) {
            newKey = database.ref().child("bbs").push().key;
        }

        database
            .ref("bbs/" + newKey)
            .set({
                seq: newKey,
                b_date: moment().tz("Asia/Seoul").format("YYYY-MM-DD"),
                b_time: moment().tz("Asia/Seoul").format("HH:mm:ss"),
                b_title: this.state.b_title,
                b_write: this.state.b_write,
                b_text: this.state.b_text,
            })
            .then(() => {
                // 데이터 저장이 완료되면 처음 화면으로 점프하기
                // react-router로 감싸진 경우 this.props.history 객체를 통해 원한는 path로 redirect할수 있다.
                this.props.history.push("/");
            });

        // doc_key 데이터가 있으면 update, 없으면 insert
        //  .collection("bbs").doc(doc_key).set({}) : Update
        // insert 새로운 doc_key 가 생성되면서 insert 가 된다
        firestore.collection("bbs").add({
            b_date: moment().tz("Asia/Seoul").format("YYYY-MM-DD"),
            b_time: moment().tz("Asia/Seoul").format("HH:mm:ss"),
            b_title: this.state.b_title,
            b_write: this.state.b_write,
            b_text: this.state.b_text,
        });
        let tasksData = [];
        // firestore.js에서 가져온 firestore 객체
        // firestore
        //     .collection("tasks") //  "tasks" 컬렉션 반환
        //     .get() // "tasks" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
        //     .then((docs) => {
        //         // forEach 함수로 각각의 다큐먼트에 함수 실행
        //         docs.forEach((doc) => {
        //             // data(), id로 다큐먼트 필드, id 조회
        //             tasksData.push({ todo: doc.data().todo, id: doc.id });
        //         });
        //         // tasks state에 받아온 데이터 추가
        //         // setTasks((prevTasks) => prevTasks.concat(tasksData));
        //     });
    };

    componentDidMount() {
        this.bbsItemFetch();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    bbsItemFetch = () => {
        // 만약 ...bbsid 값이 undefined이면 0을 id에 저장하고
        // 그렇지 않으면 그 문자열을 id에 저장하라
        const seq = this.props.match.params.seq;
        if (!seq) return;
        database
            .ref("bbs/" + seq)
            .once("value")
            .then((result) => {
                console.log(result);
                let bbsVO = result.val();
                this.setState({
                    seq: bbsVO.seq,
                    b_title: bbsVO.b_title,
                    b_write: bbsVO.b_write,
                    b_text: bbsVO.b_text,
                });
            });
    };

    // input box에 데이터를 입력할수 있도록 even설정
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div className="container-fluid p-5">
                <div className="form-group">
                    <input
                        class="form-control"
                        onChange={this.handleOnChange}
                        value={this.state.b_write}
                        name="b_write"
                        placeholder="작성자"
                    />
                </div>
                <div className="form-group">
                    <input
                        class="form-control"
                        onChange={this.handleOnChange}
                        value={this.state.b_title}
                        name="b_title"
                        placeholder="제목"
                    />
                </div>
                <div className="form-group">
                    <input
                        class="form-control"
                        onChange={this.handleOnChange}
                        value={this.state.b_text}
                        name="b_text"
                        placeholder="내용"
                    />
                </div>
                <div className="button-group text-right">
                    <button
                        type="button"
                        onClick={this.bbsInsert}
                        className="btn btn-primary"
                    >
                        저장
                    </button>
                </div>
            </div>
        );
    }
}

export default BBsWrite;
