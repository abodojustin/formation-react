import withLogo from "./withLogo";
import logo from "./logo.svg";


const React = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
};

export default withLogo(React);
