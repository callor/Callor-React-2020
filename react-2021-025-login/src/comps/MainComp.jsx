import { Route } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

// Route Comps
import Notice from "./Notice";
import BBs from "./BBs";
import MyPage from "./MyPage";

function MainComp() {
    const { user } = useUserContext();
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const navList = [
        { id: 0, title: "Home", link: "/" },
        { id: 1, title: "공지사항", link: "/notice" },
        { id: 2, title: "자유게시판", link: "/bbs" },
        user?.id
            ? { id: 3, title: "로그아웃", link: "/logout", align: true }
            : { id: 3, title: "로그인", link: "/login", align: true },

        user?.id
            ? { id: 4, title: "마이페이지", link: "/mypage" }
            : { id: 4, title: "회원가입", link: "/join" },
    ];
    return (
        <MainNav navList={navList}>
            <Route exact path="/login">
                <LoginForm />
            </Route>
            <Route exact path="/join">
                <JoinForm />
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
            <Route exact path="/notice">
                <Notice />
            </Route>
            <Route exact path="/bbs">
                <BBs />
            </Route>
            <Route exact path="/mypage">
                <MyPage />
            </Route>
        </MainNav>
    );
}

export default MainComp;
