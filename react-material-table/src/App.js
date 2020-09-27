import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomTable from "./component/CustomTable";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    backgroundColor: "#FAE5D3",
  },
  table: {
    minWidth: 1080,
  },
});
const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/animals",
    name: "홍길동",
    birth: "990512",
    gender: "Male",
    job: "학생",
  }, //1
  {
    id: 2,
    image: "https://placeimg.com/64/64/nature",
    name: "이몽룡",
    birth: "990812",
    gender: "feMale",
    job: "엔터테이너",
  }, //2
  {
    id: 3,
    image: "https://placeimg.com/64/64/people",
    name: "성춘향",
    birth: "990712",
    gender: "feMale",
    job: "회사원",
  }, //3
  {
    id: 4,
    image: "https://placeimg.com/64/64/arch",
    name: "장보고",
    birth: "990612",
    gender: "Male",
    job: "백수",
  }, //4
  {
    id: 5,
    image: "https://placeimg.com/64/64/tech",
    name: "장영실",
    birth: "990612",
    gender: "Male",
    job: "개발자",
  }, //4
]; //customers
function App({ classes }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>사진</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((c) => {
                return (
                  <CustomTable
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birth={c.birth}
                    gender={c.gender}
                    job={c.job}
                  />
                ); //map.return
              })}
            </TableBody>
          </Table>
        </Paper>
      </header>
    </div>
  );
}

// export default App;
export default withStyles(styles)(App);
