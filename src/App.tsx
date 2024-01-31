import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footter from "./Components/Footter";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footter />
    </div>
  );
}

export default App;
