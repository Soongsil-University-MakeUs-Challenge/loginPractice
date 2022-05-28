import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>login-practice</div>
      </header>
      <body>
        <p>Sign in</p>
        <form action="" method="POST">
          <div className="input-box">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="ID"
              required
            />
          </div>

          <div className="input-box">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="PW"
              required
            />
          </div>
          <input className="bnt" type="submit" value="LOG IN" />
        </form>
        <input className="bnt" type="button" value="CREATE ACCOUNT" />
      </body>
    </div>
  );
}

export default App;
