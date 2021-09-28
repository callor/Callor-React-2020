import PhoneView from "./PhoneBookView";
import PhoneBookUpdate from "./PhoneBookUpdate";

/**
 * App.js 에서 MessageMain.jsx를 포함
 * MessageMain.jsx에서 MessageUpdate.jsx와 MessageView.jsx를 포함
 *
 * MessageUpdate >> MessageMain >> App.js 데이터 setting
 * App.js >> MessageMain >> MessageView 데이터 보여주기
 *
 * MessageMain 컴포넌트는 state 함수에 대하여 아무것도 몰라도 된다.
 *
 * @returns
 */
function PhoneMain() {
    return (
        <div>
            <PhoneBookUpdate />
            <PhoneView />
        </div>
    );
}

export default PhoneMain;
