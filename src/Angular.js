import withLogo from "./withLogo";
import logo from "./angular.svg";


const Angular = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
};

export default withLogo(Angular);
