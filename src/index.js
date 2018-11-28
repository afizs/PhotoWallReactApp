import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const items = [
  "This is first item",
  "Second Item",
  "Third Item",
  "Another item",
  "Final Item"
];

class List extends Component {
  render() {
    return (
      <ol>
        {this.props.tasks.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Title title="toDos: " />
        <List tasks={items} />
        <List tasks={items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
