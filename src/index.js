import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./styles.css";

class App extends Component {
  state = {
    stories: [
      { name: "Blah1", description: "Blah", column: "notStarted" },
      { name: "Blah2", description: "Blah", column: "inProgress" },
      { name: "Blah3", description: "Blah", column: "inProgress" },
      { name: "Blah4", description: "Blah", column: "done" }
    ]
  };

  onDragStart = (event, id) => {
    event.preventDefault();
    event.dataTransfer.setData("id", id);
  };

  onDrop = (event, column) => {
    const id = event.dataTransfer.getData("id");
    const tasks = this.state.stories.filter(task => {
      if (task.name === id) {
        task.category = column;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });
  };

  onDragOver = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div>Jira Board</div>
        <Board
          stories={this.state.stories}
          onDrop={this.onDrop}
          onDragStart={this.onDragStart}
          onDragOver={this.onDragOver}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
