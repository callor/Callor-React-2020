import PhoneView from "./PhoneBookView";
import PhoneBookInsert from "./PhoneBookInsert";
import PhoneBookListView from "./PhoneBookListView";
import { Route } from "react-router-dom";

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
            <Route path="/" exact>
                <PhoneBookInsert />
                <PhoneView />
            </Route>
            <Route path="/insert" exact>
                <PhoneBookInsert />
            </Route>
            <Route path="/list" exact>
                <PhoneBookListView />
            </Route>
        </div>
    );
}

export default PhoneMain;
