function Tweet(props){
    return (
        <div className="tweet">
            <p>{username.props}</p>
            <p>{name.props}</p>
            <p>{Date.props}</p>
            <p>{message.props}</p>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
  );