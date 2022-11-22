import React from "react";
import "./task.css";

export const Task = ({ task, index, onDone, onDelete }) => {
  return (
    <div className="task">
      <div className="left">
        <h3
          style={{
            textDecoration: task.status === "done" ? "line-through" : "none",
          }}
        >
          {index + 1}. {task.title}
        </h3>
        <p>{task.text}</p>
      </div>
      <div className="right">
        <button onClick={() => onDone(index)}>Done</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
};
