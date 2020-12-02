import { useState } from "react";
import "./App.css";
import "./component/CompGuguList";
import CompGuguList from "./component/CompGuguList";
import "./component/CompInput";
import CompInput from "./component/CompInput";

function App() {
  const [number, setNumber] = useState(1);
  const divStyle = {
    display: "inline-block",
    width: "30%",
    margin: "10px",
    border: "1px solid yellow",
    float: "left",
  };
  return (
    <div className="App">
      <header className="App-header">
        <CompInput number={number} setNumber={setNumber} />
        <div style={{ width: "80%", margin: "30px auto", display: "flex" }}>
          <div style={divStyle}>
            <CompGuguList number={number} />
          </div>
          <div style={divStyle}>
            <CompGuguList number={number} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
