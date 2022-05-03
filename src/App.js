import "./App.css";
import DataProvider from "./DataProvider";

const list = [
  {
    id: 1,
    text: "learn React",
    completed: false,
  },
  {
    id: 2,
    text: "pay Bills",
    completed: false,
  },
  {
    id: 3,
    text: "buy Groceries",
    completed: false,
  },
];

function App() {
  return (
    <DataProvider
      items={list}
      render={({ data, handleOnChange, handleOnSubmit }) => {
        return (
          <>
            <form onSubmit={handleOnSubmit}>
              <input type="text" onChange={handleOnChange} /> &nbsp;{" "}
              <button type="submit">add</button>
            </form>
            <ul>
              {data.todos.map((todo) => {
                return <li key={todo.id}>{todo.text}</li>;
              })}
            </ul>
          </>
        );
      }}
    />
  );
}

export default App;
