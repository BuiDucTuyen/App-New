import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footter from "./Components/Footter";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Logo from "./Components/Section/logo";
import Detail from "./Components/Section/secDetail";

function App() {
  return (
    <div className="bg-slate-500">
      <div className=" mx-auto max-w-[1440px]">
        <Header />
        <Logo></Logo>
        <Home />
        <Footter />
      </div>
    </div>
  );
}

export default App;
