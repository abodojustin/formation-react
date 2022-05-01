import { useEffect, useRef, useContext } from "react";
import { Context } from "./context";
import logo from "./logo.svg";
import "./App.css";

function Form() {
  const inputRef = useRef();
  const { inputValue, dispatch, onChange } = useContext(Context);
  const handleOnChange = (e) => {
    onChange(e.target.value);
    setTimeout(() => dispatch({ type: "setEditing" }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return false;
    }
    addItem();
    onChange(null);
  };
  const addItem = () => {
    dispatch({ type: "add", payload: { value: inputValue } });
    inputRef.current.value = null;
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input ref={inputRef} type="text" onChange={handleOnChange} />
        &nbsp;
        <button type="submit">add</button>
      </form>
      <br />
    </>
  );
}

function Todos() {
  const { state, dispatch } = useContext(Context);
  const removeItem = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };
  return (
    <ul>
      {" "}
      {state.items.map((item, index) => (
        <li key={index} onClick={() => removeItem(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
function App() {
  const { state } = useContext(Context);
  useEffect(() => console.log(state.value), [state.value]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <Todos />
      </header>
    </div>
  );
}

export default App;
