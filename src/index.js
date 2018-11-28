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
  <div>
    <h1>Task List: </h1>
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item} </li>
      ))}
    </ol>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(App, rootElement);
