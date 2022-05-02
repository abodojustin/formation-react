import { useState, useContext } from "react";
import { Context } from "./context";
import logo from "./logo.svg";
import "./App.css";

function Login({ connect }) {
  const [value, setValue] = useState(null);
  const handleOnSubmit = (e) => {
    connect(e, value);
    console.log("user is connected");
  };
  const handleOnChange = (e) => setValue(e.target.value);

  return (
    <>
      <p>User not Connected</p>
      <form onSubmit={handleOnSubmit}>
        <input
          type={"text"}
          placeholder={"username"}
          onChange={handleOnChange}
        />{" "}
        &nbsp; <button type={"submit"}>login</button>
      </form>
    </>
  );
}

function Home({ disconnect }) {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br />
      <button onClick={disconnect}>logout</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Context.Consumer>
          {(value) => {
            return !!value.user ? <Home {...value} /> : <Login {...value} />;
          }}
        </Context.Consumer>
      </header>
    </div>
  );
}

export default App;
