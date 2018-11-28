import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const items = [
  "This is first item",
  "Second Item",
  "Third Item",
  "Another item",
  "Final Item"
];
const App = (
  <ol>
    {items.map(item => (
      <li>{item} </li>
    ))}
  </ol>
);

const rootElement = document.getElementById("root");
ReactDOM.render(App, rootElement);
