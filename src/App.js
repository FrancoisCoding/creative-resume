import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <span className="results">About 5,240,000 results (0.42 seconds)</span>
      <Body />
    </div>
  );
}

export default App;
