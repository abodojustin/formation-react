const withLogo = (Component) => (props) => {
  return (
    <div style={{ flexDirection: "column", textAlign: "center", width: "30%" }}>
      <Component {...props} />
      <a
        className="App-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.content}
      </a>
    </div>
  );
};

export default withLogo;