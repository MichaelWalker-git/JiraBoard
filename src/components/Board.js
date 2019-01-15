import React, { Component } from "react";

require("board.css");

const Board = props => {
  const columns = {
    notStarted: [],
    inProgress: [],
    done: []
  };

  props.stories.forEach(story => {
    columns[story.column].push(
      <div
        key={story.name}
        onDragStart={e => props.onDragStart(e, story.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: story.bgcolor }}
      >
        {story.name}
      </div>
    );
  });
  return (
    <div className="board">
      <div
        className="columnOne"
        onDragOver={e => props.onDragOver(e)}
        onDrop={e => {
          props.onDrop(e, "notStarted");
        }}
      >
        <div className="headerTitle">Not Done</div>
        <div>{columns.notStarted.map(story => story)}</div>
      </div>
      <div
        className="columnTwo"
        onDragOver={e => props.onDragOver(e)}
        onDrop={e => {
          props.onDrop(e, "inProgress");
        }}
      >
        <div className="headerTitle">In Progress</div>
        <div>{columns.inProgress.map(story => story)}</div>
      </div>
      <div
        className="columnThree"
        onDragOver={e => props.onDragOver(e)}
        onDrop={e => {
          props.onDrop(e, "done");
        }}
      >
        <div className="headerTitle">Done</div>
        <div>{columns.done.map(story => story)}</div>
      </div>
    </div>
  );
};

export default Board;
