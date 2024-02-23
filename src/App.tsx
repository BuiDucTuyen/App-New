import React from "react";

import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Section/Layout";
import Detail from "./Components/Section/Detail";

import Tintuc from "./Components/Section/tintuc";
import Kienthuc from "./Components/Section/kienthuc";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      ></Route>
      <Route
        path="/TinTuc"
        element={
          <Layout>
            <Tintuc />
          </Layout>
        }
      ></Route>
      <Route
        path="/Kienthuc"
        element={
          <Layout>
            <Kienthuc />
          </Layout>
        }
      ></Route>
      <Route
        path="/BaiViet/:id"
        element={
          <Layout>
            <Detail />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
