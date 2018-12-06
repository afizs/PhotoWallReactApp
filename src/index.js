import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";
import Main from "./components/Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  rootElement
);
