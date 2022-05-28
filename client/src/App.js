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
          <div class="input-box">
            <input id="username" type="text" name="username" placeholder="ID" />
          </div>

          <div class="input-box">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="PW"
            />
          </div>
          <input type="button" value="LOG IN" />
        </form>
        <input type="button" value="CREATE ACCOUNT" />
      </body>
    </div>
  );
}

export default App;
