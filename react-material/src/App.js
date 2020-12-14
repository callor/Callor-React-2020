import "./App.css";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FlexBox from "./component/FlexBox";
import ComplexGrid from "./component/ComplexGrid";

function App() {
  const style = { "margin-top": "200px" };
  const onClick = () => {
    alert("Hello Material");
  };
  return (
    <div className="App" style={style}>
      <Box component="span" m={1}>
        <Button color="primary" onClick={onClick}>
          Hello World
        </Button>
      </Box>
      <FlexBox />
      <ComplexGrid />
    </div>
  );
}

export default App;
