import "./App.css";

/**
 *
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>수강생 정보 등록</h2>
        <select>
          <option>과정을 선택하세요</option>
        </select>
        <input placeholder="이름을 입력하세요" />
        <div className="email-box">
          <input className="input-email" placeholder="이메일을 입력하세요" type="email" />
          <input className="button-email" type="button" value="메일인증"></input>
        </div>
        <footer>
          <address>CopyRight &copy; callor@callor.com</address>
        </footer>
      </header>
    </div>
  );
}

export default App;
