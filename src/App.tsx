import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footter from "./Components/Footter";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="bg-headerBg">
      <div className=" mx-auto max-w-[1440px] flex flex-col gap-[30px]">
        <Header />
        <Home />
        <Footter />
      </div>
    </div>
  );
}

export default App;
