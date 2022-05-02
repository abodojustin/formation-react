import withLogo from "./withLogo";
import logo from "./vue.svg";


const Vue = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
};

export default withLogo(Vue);
