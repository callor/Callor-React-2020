import PropTypes from "prop-types";
import React, { Fragment, useState, useContext } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import qs from "qs";
import { MemberStateContext } from "../../context/memberContext";

const LoginRegister = ({ location }) => {
  const { pathname } = location;

  // App.js 에 선언된 회원정보 데이터를 공유하기 위한 선언
  const membserStateContext = useContext(MemberStateContext);

  // 회원가입폼 데이터 입력을 위한 임시 데이터 저장소
  // 회원가입 버튼을 클릭하면 이 데이터를 서버로 전송
  const [member, setMember] = useState({
    frienner_id: "",
    frienner_nn: "",
    frienner_pw: "",
    frienner_name: "",
    frienner_addr: "",
    frienner_tel: "",
    frienner_email: "",
    frienner_liv: "",
    frienner_sup: "",
  });

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const onJoin = (e) => {
    const joinData = { ...member };
    axios
      .post("http://localhost:4000/member/join", joinData)

      // header: new Headers(),
      .then((result) => {
        console.log(result);
        alert("회원가입에 성공하였습니다.");
        return window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입에 실패 하였습니다");
      });
  };
  const onLogin = async (e) => {
    await console.log("login Start");

    // 로그인 실행을 위하여 입력 상자의 id와 pw 가져오기
    const { frienner_id, frienner_pw } = member;

    if (frienner_id === "") {
      alert("Username을 입력하세요");
      return false;
    }
    if (frienner_pw === "") {
      alert("Password를 입력하세요");
      return false;
    }

    const loginData = {
      frienner_id, // korea", // id,
      frienner_pw, //"12345", // pw,
    };

    /*
    @issue
    axios의 option을 설정하면 server에서 데이터를 수신하지 못함
    기본 형식으로 전송해야 함
    */
    await axios
      .post("http://localhost:4000/member/login", loginData)
      //   {
      //     data: JSON.stringify(loginData),
      //     body: JSON.stringify(loginData),
      //     method: "POST",
      //     withCredentials: true,
      //     // mode: "no-cors",
      //     credentials: "include",
      //     headers: {
      //       "Content-Type": "application/json; charset=utf-8",
      //       Accept: "application/json",
      //       credentials: "include",
      //     },
      //   }
      // )

      .then(async (result) => {
        // 로그인 완료후 서버에서 전송된 데이터를
        // App.js 의 회원정보에 업데이터 로그인 유지
        console.log("result:", result.data);
        await membserStateContext.setPropsMember(result.data.member);
        await console.log("setMember:", membserStateContext.propsMember);
        alert("로그인 되었습니다.");
        return window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패 하였습니다");
      });
  };

  const onLogout = (e) => {
    axios.post("http://localhost:4000/member/logout").then((result) => {
      membserStateContext.setMember({});
      alert("로그아웃 되었습니다.");
      return window.location.reload();
    });
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta name="description" content="Compare page of flone react minimalist eCommerce template." />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Login Register</BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input type="text" name="frienner_id" value={member.frienner_id} onChange={(e) => onChangeHandle(e)} placeholder="Username" />
                              <input type="password" name="frienner_pw" value={member.frienner_pw} onChange={(e) => onChangeHandle(e)} placeholder="Password" />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>Forgot Password?</Link>
                                </div>
                                <button type="button" onClick={onLogin}>
                                  <span>Login</span>
                                </button>
                                <button type="button" onClick={onLogout}>
                                  <span>Logout</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form method="POST">
                              <input type="text" name="frienner_id" onChange={(e) => onChangeHandle(e)} placeholder="User ID" />
                              <input type="text" name="frienner_nn" onChange={(e) => onChangeHandle(e)} placeholder="Nick Name" />
                              <input type="password" name="frienner_pw" onChange={(e) => onChangeHandle(e)} placeholder="Password" />
                              <input type="text" name="frienner_name" onChange={(e) => onChangeHandle(e)} placeholder="NAME" />
                              <input type="text" name="frienner_addr" onChange={(e) => onChangeHandle(e)} placeholder="Address" />
                              <input type="text" name="frienner_tel" onChange={(e) => onChangeHandle(e)} placeholder="TEL" />
                              <input type="text" name="frienner_email" onChange={(e) => onChangeHandle(e)} placeholder="E-MAIL" />
                              <input name="frienner_liv" placeholder="Live Country" onChange={(e) => onChangeHandle(e)} type="text" />
                              <input type="number" name="frienner_sup" onChange={(e) => onChangeHandle(e)} placeholder="SUP" />
                              <div className="button-box">
                                <button type="button" onClick={onJoin}>
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
  // }
};

LoginRegister.propTypes = {
  location: PropTypes.object,
  member: PropTypes.object,
};

export default LoginRegister;
