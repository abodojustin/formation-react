import logo from './logo.svg';
import './App.css';

const withHOC = (Component) => () => {
  const learn = "Learn React";
  return <Component text={learn} />
}

function App({ text }) {
  return (
    <div className="App">
      <header className="App-header">
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
          {text}
        </a>
      </header>
    </div>
  );
}

export default withHOC(App);
