import React from './React';
import Angular from './Angular';
import './App.css';
import Vue from './Vue';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: "flex", flexDirection: "row"}}>
        <React content={"Learn React"} link={"https://fr.reactjs.org/"} />
        <Angular content={"Learn Angular"} link={"https://angular.io"} />
        <Vue content={"Learn Vue"} link={"https://vue.org"} />
      </header>
    </div>
  );
}

export default App;
