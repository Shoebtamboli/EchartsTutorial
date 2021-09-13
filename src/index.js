import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import UserStats from "./components/User/UserStats";
import TeamStats from "./components/Team/TeamStats";

function App() {
  return (
    <div className="App">
      <h1>Stats demo</h1>
      <div className="wrapper">
        <div className="header">
          <h2>User stats:</h2>
          <UserStats />
        </div>
        <div className="header">
          <h2>Team stats:</h2>
          <TeamStats />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
