import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WriteBBs from "./comps/write";
import ViewBBs from "./comps/view";

const bbsSample = {
    b_date: "2021-09-06",
    b_time: "16:12:00",
    b_writer: "이몽룡",
    b_subject: "React BBS",
    b_content: "React를 활용한 BBS 프로그래밍",
};

function App() {
    const [bbs, setBBs] = useState(bbsSample);
    const bbsChange = (e) => {
        const { name, value } = e.target;
        setBBs({ ...bbs, [name]: value });
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <section className="main_section">
                <article>
                    <WriteBBs bbs={bbs} bbsChange={bbsChange} />
                </article>
                <article>
                    <ViewBBs bbs={bbs} />
                </article>
            </section>
        </div>
    );
}

export default App;
