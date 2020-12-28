import { useState } from "react";
import "./App.css";
import { Counter, Button, Option } from "./component";

function App() {
  const [value, setValue] = useState(1);
  const [diff, setDiff] = useState("1");

  const onChange = (v) => {
    setDiff({ diff: v });
  };
  const onIncrement = () => {
    setValue(value + Number(diff));
  };
  const onDecrement = () => {
    setValue(value - Number(diff));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter value={value} /> <Option diff={diff} onChange={onChange} />
        <Button onIncrement={onIncrement} onDecrement={onDecrement} />
      </header>
    </div>
  );
}

export default App;
