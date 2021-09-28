import { useState } from "react";
import "../css/SingUpDialog.css";

function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    );
}

function SignUpDialog() {
    const [login, setLogin] = useState({ login: "" });
    const handleChange = (e) => {
        setLogin({ login: e.target.value });
    };

    const handleSignUp = () => {
        alert(`Welcome aboard, ${login.login}!`);
    };
    return (
        <Dialog
            title="Mars Exploration Program"
            message="How should we refer to you?"
        >
            <input value={login.login} onChange={handleChange} />
            <button onClick={handleSignUp}>Sign Me Up!</button>
        </Dialog>
    );
}

export default SignUpDialog;
