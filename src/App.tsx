import React from "react";

import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Section/Layout";
import Detail1 from "./Components/Section/secDetail";
import Detail from "./Components/Section/Detail";
import Detail2 from "./Components/Section/Detail2";

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
            <Detail1 />
          </Layout>
        }
      ></Route>
      <Route
        path="/BaiViet"
        element={
          <Layout>
            <Detail />
          </Layout>
        }
      ></Route>
      <Route
        path="/baiviet/:id"
        element={
          <Layout>
            <Detail2 />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
