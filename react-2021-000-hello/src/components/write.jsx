import { useState } from "react";
import ViewBBS from "./view";

const bbsJSON = {
    b_date: "2021-09-06",
    b_time: "11:24:00",
    b_writer: "홍길동",
    b_subject: "비가오는 월요일",
    b_content: "가을장마가 기~~~네요",
};

/**
 * bbs 객체의 요소들을 input box value속성에 지정(할당)했다
 * 이 form 화면이 보여지는 상태에서
 * input box를 클릭하고 키보드로 뭔가를 입력하면(변경하면)
 * 결국에 value 속성에 할당된 bbs 객체의 요소의 값들이 변경될 것이다
 *
 * HTML에서 <input name="b_name" value="b_name">이라는 코드는
 * 결국 화면에서 b_name input box를 클릭하고
 * 키보드로 이름(문자열)을 입력하면 내부에서
 * b_name = scan.nextString() 과 유사한 코드가 실행되어
 * b_name이라는 변수에 문자열을 저장하도록 코드가 작동 될 것이다.
 *
 * 하지만 react 에서는 b_name = 이름 과 같은 코드는 금지된다
 * 때문에 react로 form을 만들고 value속성에 변수명을 지정하는 순간
 * input box는 read only가 된다
 *
 *
 * 그렇다면 input에 뭔가를 입력하고 싶은데
 * read only가 되버리면 input 을 사용하는 의미가 없어진다
 * react에서는 input box에 change event를 설정하고
 * 키보드 입력된 문자열을 가로채서 state() 함수를 사용하여
 * 값을 변화시켜야 한다.
 *
 */

const Write = () => {
    // 단일변수 변경
    const onChangeHandle = (e) => {
        setB_Name(e.target.value);
    };

    // 객체변수 변경
    const onChangeBBs = (e) => {
        const { name, value } = e.target;
        setBBs({ ...bbs, [name]: value });
    };

    const [bbs, setBBs] = useState(bbsJSON);
    const [b_name, setB_Name] = useState("이몽룡");

    return (
        <div>
            <form>
                <p>
                    <input
                        name="b_date"
                        defaultValue={bbs.b_date}
                        onChange={onChangeBBs}
                    />
                </p>
                <p>
                    <input
                        name="b_time"
                        defaultValue={bbs.b_time}
                        onChange={onChangeBBs}
                    />
                </p>
                <p>
                    <input
                        name="b_writer"
                        defaultValue={b_name}
                        onChange={onChangeHandle}
                    />
                </p>
                <p>
                    <input
                        name="b_subject"
                        defaultValue={bbs.b_subject}
                        onChange={onChangeBBs}
                    />
                </p>
                <p>
                    <input
                        name="b_content"
                        defaultValue={bbs.b_content}
                        onChange={onChangeBBs}
                    />
                </p>
            </form>
            <ViewBBS bbs={bbs} b_name={b_name} />
        </div>
    );
};
export default Write;
